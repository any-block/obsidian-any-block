/**
 * 转换器_目录树
 * 
 * md_str <-> md_str
 * md_str <-> html
 */

import {ABConvert_IOEnum, ABConvert, type ABConvert_SpecSimp} from "./ABConvert"
import {ABConvertManager} from "../ABConvertManager"
import {ListProcess, type List_ListItem} from "./abc_list"

import plantumlEncoder from "plantuml-encoder"

const abc_list2jsontext = ABConvert.factory({
  id: "json2pumlJson",
  name: "json到可视化",
  process_param: ABConvert_IOEnum.text,
  process_return: ABConvert_IOEnum.el,
  process: (el, header, content: string): HTMLElement=>{
    content = "@startjson\n" + content + "\n@endjson\n"
    render_pumlText(content, el)
    return el
  }
})


const abc_list2ActivityDiagramText = ABConvert.factory({
	id: "list2pumlActivityDiagramText",
	name: "列表到puml活动图文本",
	process_param: ABConvert_IOEnum.text,
	process_return: ABConvert_IOEnum.text,
	process: (el, header, content: string): string => {
		return list2ActivityDiagramText(ListProcess.list2data(content))
	}
})

const abc_list2ActivityDiagram = ABConvert.factory({
	id: "list2pumlActivityDiagram",
	name: "列表到puml活动图",
	process_param: ABConvert_IOEnum.text,
	process_return: ABConvert_IOEnum.el,
	process: (el, header, content: string): HTMLElement => {
		const puml = list2ActivityDiagramText(ListProcess.list2data(content))
		render_pumlText(puml, el)
		return el
	}
})

const abc_list2pumlWBS = ABConvert.factory({
  id: "list2pumlWBS",
  name: "列表到puml工作分解结构",
  process_param: ABConvert_IOEnum.text,
  process_return: ABConvert_IOEnum.el,
  process: (el, header, content: string): HTMLElement=>{
    let listdata:List_ListItem = ListProcess.list2data(content)
    listdata = ListProcess.data2strict(listdata)
    let newContent = "@startwbs\n"
    for (let item of listdata) {
      if (item.content.startsWith("< "))
        newContent += "*".repeat(item.level+1) + "< " + item.content.slice(2,) + "\n"
      else
        newContent += "*".repeat(item.level+1) + " " + item.content + "\n"
    }
    newContent += "@endwbs"

    render_pumlText(newContent, el)
    return el
  }
})

const abc_list2pumlMindmap = ABConvert.factory({
  id: "list2pumlMindmap",
  name: "列表到puml思维导图",
  process_param: ABConvert_IOEnum.text,
  process_return: ABConvert_IOEnum.el,
  process: (el, header, content: string): HTMLElement=>{
    let listdata:List_ListItem = ListProcess.list2data(content)
    listdata = ListProcess.data2strict(listdata)
    let newContent = "@startmindmap\n"
    for (let item of listdata) {
      newContent += "*".repeat(item.level+1) + " " + item.content + "\n"
    }
    newContent += "@endmindmap"

    render_pumlText(newContent, el)
    return el
  }
})

async function render_pumlText(text: string, div: HTMLElement) {
    // 1. 四选一。自己渲 (优缺点见abc_mermaid的相似方法)
    // 当前mdit和ob使用
    var encoded = plantumlEncoder.encode(text)
    let url = 'http://www.plantuml.com/plantuml/img/' + encoded
    div.innerHTML = `<img src="${url}">`

    // 2. 四选一。这里给环境渲染 (优缺点见abc_mermaid的相似方法)
    //ABConvertManager.getInstance().m_renderMarkdownFn("```plantuml\n"+text+"```", div)

    // 3. 四选一。这里不渲，交给上一层让上一层渲 (优缺点见abc_mermaid的相似方法)
    //div.classList.add("ab-raw")
    //div.innerHTML = `<div class="ab-raw-data" type-data="plantuml" content-data='${text}'></div>`

    // 4. 四选一。纯动态/手动渲染 (优缺点见abc_mermaid的相似方法)
    // ...

    return div
}

function list2ActivityDiagramText(listdata: List_ListItem): string {
  let result = "@startuml\n";
  result += "start\n";
  const {result: bodyResult} = processBody(listdata, 0, -1);
  result += bodyResult;
  result += "end\n";
  result += "@enduml";
  return result;
}

// 处理主体内容，递归处理所有项
function processBody(listdata: List_ListItem, startIndex: number, parentLevel: number): {result: string, nextIndex: number} {
  let result = "";
  let i = startIndex;
  
  while (i < listdata.length && (parentLevel === -1 || listdata[i].level > parentLevel)) {
    const item = listdata[i];
    const content = item.content.trim();
    const level = item.level;
    
    if (isReservedWord(content)) {
      result += content + "\n";
      i++;
      continue;
    }
    
    if (content.startsWith("if:")) {
      const {result: ifResult, nextIndex} = processIfStatement(listdata, i, level);
      result += ifResult;
      i = nextIndex;
      continue;
    }
    
    if (content.startsWith("switch:")) {
      const {result: switchResult, nextIndex} = processSwitchStatement(listdata, i, level);
      result += switchResult;
      i = nextIndex;
      continue;
    }
    
    if (content.startsWith("while:")) {
      const {result: whileResult, nextIndex} = processWhileStatement(listdata, i, level);
      result += whileResult;
      i = nextIndex;
      continue;
    }
    
    if (content.startsWith("group:")) {
      const {result: groupResult, nextIndex} = processGroupStatement(listdata, i, level);
      result += groupResult;
      i = nextIndex;
      continue;
    }
    
    if (content.startsWith("partition:")) {
      const {result: partitionResult, nextIndex} = processPartitionStatement(listdata, i, level);
      result += partitionResult;
      i = nextIndex;
      continue;
    }
    
    if (isSwimLane(content)) {
      result += processSwimLane(content);
      i++;
      continue;
    }
    
	if (content.length > 0) {
		result += `:${content};` + "\n";
	}
    i++;
  }
  
  return {result, nextIndex: i}
}

// 判断是否为保留字
function isReservedWord(content: string): boolean {
  return content === "start" || content === "stop" || content === "kill" || 
         content === "detach" || content === "break" || content === "end" || 
         content === "fork" || content === "fork again" || content === "end fork" || 
         content === "end merge";
}

// 判断是否为泳道
function isSwimLane(content: string): boolean {
  return content.startsWith("|") && content.endsWith("|");
}

// 处理if语句
function processIfStatement(listdata: List_ListItem, index: number, level: number): { result: string, nextIndex: number } {
	let result = "if";
	const condition = listdata[index].content.trim().replace("if:", "").trim()
	let nextIndex = index + 1

	if (nextIndex < listdata.length && listdata[nextIndex].level === level + 1) {
		let branch1Tag = listdata[nextIndex].content.trim();
		if (branch1Tag.length === 0) {
			branch1Tag = "yes"
		}
		result += `(${condition}) then (${branch1Tag})\n`
		nextIndex++;
		const {result: result2, nextIndex: nextIndex2} = processBody(listdata, nextIndex, level + 1)
		result += result2
		nextIndex = nextIndex2
	}

	// process else and else if
	while (nextIndex < listdata.length && listdata[nextIndex].level === level + 1 && listdata[nextIndex].content.trim() !== "") {
		const branch1Tag = listdata[nextIndex].content.trim();
		if (branch1Tag.length !== 0) {
			result += `else if(${branch1Tag}) then (yes)`
		}else{
			result += `else`
		}
		const {result: result2, nextIndex: nextIndex2} = processBody(listdata, nextIndex + 1, level + 1)
		result += result2
		nextIndex = nextIndex2
	}

	result += "endif\n";
	return { result, nextIndex };
}

// 处理switch语句
function processSwitchStatement(listdata: List_ListItem, index: number, level: number): { result: string, nextIndex: number } {
  let result = "switch";
  const condition = listdata[index].content.trim().replace("switch:", "").trim();
  let nextIndex = index + 1;
  
  result += `(${condition})\n`;
  
  // 处理case
  while (nextIndex < listdata.length && listdata[nextIndex].level > level) {
    if (listdata[nextIndex].level === level + 1) {
      const caseContent = listdata[nextIndex].content.trim();
      result += `case (${caseContent})\n`;
      nextIndex++;
      const {result: caseResult, nextIndex: caseNextIndex} = processBody(listdata, nextIndex, level + 1);
      result += indentContent(caseResult);
      nextIndex = caseNextIndex;
    } else {
      nextIndex++;
    }
  }
  
  result += "endswitch\n";
  return { result, nextIndex };
}

// 处理while语句
function processWhileStatement(listdata: List_ListItem, index: number, level: number): { result: string, nextIndex: number } {
  const content = listdata[index].content.trim();
  const condition = content.substring(6).trim();
  let result = `while (${condition}) is (true)\n`;
  let nextIndex = index + 1;
  
  // 处理while下的内容
  const {result: bodyResult, nextIndex: bodyNextIndex} = processBody(listdata, nextIndex, level);
  result += indentContent(bodyResult);
  nextIndex = bodyNextIndex;
  
  result += "endwhile (false)\n";
  return { result, nextIndex };
}

// 处理group语句
function processGroupStatement(listdata: List_ListItem, index: number, level: number): { result: string, nextIndex: number } {
  const content = listdata[index].content.trim();
  const groupName = content.substring("group:".length).trim();
  let result = `group ${groupName}\n`;
  let nextIndex = index + 1;
  
  // 处理group下的内容
  const {result: bodyResult, nextIndex: bodyNextIndex} = processBody(listdata, nextIndex, level);
  result += indentContent(bodyResult);
  nextIndex = bodyNextIndex;
  
  result += "endgroup\n";
  return { result, nextIndex };
}

// 处理partition语句
function processPartitionStatement(listdata: List_ListItem, index: number, level: number): { result: string, nextIndex: number } {
  const content = listdata[index].content.trim();
  const partitionName = content.substring(10).trim();
  let result = `partition ${partitionName} {\n`;
  let nextIndex = index + 1;
  
  // 处理partition下的内容
  const {result: bodyResult, nextIndex: bodyNextIndex} = processBody(listdata, nextIndex, level);
  result += indentContent(bodyResult);
  nextIndex = bodyNextIndex;
  
  result += "}\n";
  return { result, nextIndex };
}

// 处理swim lane
function processSwimLane(content: string): string {
  const laneName = content.substring(1, content.length - 1).trim();
  return "|" + laneName + "|\n";
}

// 为内容添加缩进
function indentContent(content: string): string {
  return content.split('\n').map(line => "  " + line).join('\n');
}
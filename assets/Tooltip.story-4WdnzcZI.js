import{_ as p,a,o as c,c as m,w as e,b as o,d as t,e as n}from"./index-pYrdSDr0.js";const d={},f=n("b",null,"tooltip",-1),g=n("div",{class:"markdown pf-v5-c-content"},[n("h2",{class:"pf-v5-c-title"},"Examples")],-1),y={style:{margin:"100px"}};function _(v,h){const i=a("component-info"),s=a("pf-button"),l=a("pf-tooltip"),r=a("story-canvas"),u=a("doc-page");return c(),m(u,{name:"Components/Tooltip.story.vue",title:"Tooltip"},{description:e(()=>[o("A "),f,o(" is in-app messaging used to identify elements on a page with short, clarifying text.")]),apidocs:e(()=>[t(i,{src:"packages/core/src/components/Tooltip/Tooltip.vue",doc:{name:"PfTooltip",exportName:"default",displayName:"Tooltip",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"position",required:!1,type:{name:"TooltipPosition"},defaultValue:{func:!1,value:"'top'"}},{name:"trigger",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'mouseenter focus'"}},{name:"leftAligned",required:!1,type:{name:"boolean"}},{name:"entryDelay",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"300"}},{name:"exitDelay",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"distance",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"15"}},{name:"aria",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'describedby'"}},{name:"animationDuration",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"300"}},{name:"maxWidth",required:!1,type:{name:"number"}},{name:"content",required:!1,type:{name:"string"}}],slots:[{name:"default"},{name:"content"}],sourceFiles:["../../packages/core/src/components/Tooltip/Tooltip.vue"]}},null,8,["doc"]),t(i,{src:"packages/core/src/components/Tooltip/TooltipArrow.vue",doc:{name:"PfTooltipArrow",exportName:"default",displayName:"TooltipArrow",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Tooltip/TooltipArrow.vue"]}},null,8,["doc"]),t(i,{src:"packages/core/src/components/Tooltip/TooltipContent.vue",doc:{name:"PfTooltipContent",exportName:"default",displayName:"TooltipContent",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"leftAligned",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/Tooltip/TooltipContent.vue"]}},null,8,["doc"])]),default:e(()=>[g,t(r,{title:"Basic",source:`<div style="margin: 100px">
  <pf-tooltip>
    <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</template>
    <pf-button>I have a tooltip!</pf-button>
  </pf-tooltip>
</div>`},{default:e(()=>[n("div",y,[t(l,null,{content:e(()=>[o("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.")]),default:e(()=>[t(s,null,{default:e(()=>[o("I have a tooltip!")]),_:1})]),_:1})])]),_:1})]),_:1},8,["name"])}const b=p(d,[["render",_]]);export{b as default};

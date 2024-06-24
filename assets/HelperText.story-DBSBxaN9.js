import{m as o,f,o as d,c as u,w as e,a as i,b as t,u as a,d as p,e as r}from"./index-DSAMJE0Y.js";import{X as h}from"./xmark-icon-BYovbobS.js";const x={name:"InfoIcon",height:512,width:192,svgPath:"M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z",yOffset:0,xOffset:0},v=o(x),_={name:"QuestionIcon",height:512,width:320,svgPath:"M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z",yOffset:0,xOffset:0},T=o(_),g={name:"ExclamationIcon",height:512,width:64,svgPath:"M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM32 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z",yOffset:0,xOffset:0},y=o(g),w=p("b",null,"Helper text",-1),I=p("div",{class:"markdown pf-v5-c-content"},[p("h2",{class:"pf-v5-c-title"},"Examples")],-1),q=f({__name:"HelperText.story",setup(H){return(V,k)=>{const c=r("component-info"),n=r("pf-helper-text-item"),s=r("pf-helper-text"),l=r("story-canvas"),m=r("doc-page");return d(),u(m,{name:"Components/HelperText.story.vue",title:"Helper Text"},{description:e(()=>[w,i(" is an on-screen field guideline that helps provide context regarding field inputs.")]),apidocs:e(()=>[t(c,{src:"packages/core/src/components/HelperText/HelperText.vue",doc:{name:"PfHelperText",exportName:"default",displayName:"HelperText",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"component",required:!1,type:{name:"union",elements:[{name:'"div"'},{name:'"ul"'}]},defaultValue:{func:!1,value:"'div'"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/HelperText/HelperText.vue"]}}),t(c,{src:"packages/core/src/components/HelperText/HelperTextItem.vue",doc:{name:"PfHelperTextItem",exportName:"default",displayName:"HelperTextItem",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"variant",description:"Variant styling of the helper text item.",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"warning"'},{name:'"success"'},{name:'"error"'},{name:'"indeterminate"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"icon",description:"Flag indicating the helper text should have an icon. Dynamic helper texts include icons by default while static helper texts do not.",required:!1,type:{name:"boolean"}},{name:"dynamic",description:"Flag indicating the helper text item is dynamic.",required:!1,type:{name:"boolean"}}],slots:[{name:"icon"},{name:"default"}],sourceFiles:["../../packages/core/src/components/HelperText/HelperTextItem.vue"]}})]),default:e(()=>[I,t(l,{title:"Static",source:`<pf-helper-text>
  <pf-helper-text-item>This is default helper text</pf-helper-text-item>
  <pf-helper-text-item variant="indeterminate">This is indeterminate helper text</pf-helper-text-item>
  <pf-helper-text-item variant="warning">This is warning helper text</pf-helper-text-item>
  <pf-helper-text-item variant="success">This is success helper text</pf-helper-text-item>
  <pf-helper-text-item variant="error">This is error helper text</pf-helper-text-item>
</pf-helper-text>`},{default:e(()=>[t(s,null,{default:e(()=>[t(n,null,{default:e(()=>[i("This is default helper text")]),_:1}),t(n,{variant:"indeterminate"},{default:e(()=>[i("This is indeterminate helper text")]),_:1}),t(n,{variant:"warning"},{default:e(()=>[i("This is warning helper text")]),_:1}),t(n,{variant:"success"},{default:e(()=>[i("This is success helper text")]),_:1}),t(n,{variant:"error"},{default:e(()=>[i("This is error helper text")]),_:1})]),_:1})]),_:1}),t(l,{title:"Static with default icons",source:`<pf-helper-text>
  <pf-helper-text-item icon>This is default helper text</pf-helper-text-item>
  <pf-helper-text-item icon variant="indeterminate">This is indeterminate helper text</pf-helper-text-item>
  <pf-helper-text-item icon variant="warning">This is warning helper text</pf-helper-text-item>
  <pf-helper-text-item icon variant="success">This is success helper text</pf-helper-text-item>
  <pf-helper-text-item icon variant="error">This is error helper text</pf-helper-text-item>
</pf-helper-text>`},{default:e(()=>[t(s,null,{default:e(()=>[t(n,{icon:""},{default:e(()=>[i("This is default helper text")]),_:1}),t(n,{icon:"",variant:"indeterminate"},{default:e(()=>[i("This is indeterminate helper text")]),_:1}),t(n,{icon:"",variant:"warning"},{default:e(()=>[i("This is warning helper text")]),_:1}),t(n,{icon:"",variant:"success"},{default:e(()=>[i("This is success helper text")]),_:1}),t(n,{icon:"",variant:"error"},{default:e(()=>[i("This is error helper text")]),_:1})]),_:1})]),_:1}),t(l,{title:"Static with custom icons",source:`<pf-helper-text>
  <pf-helper-text-item>
    <template #icon>
      <info-icon />
    </template>
    This is default helper text
  </pf-helper-text-item>
  <pf-helper-text-item variant="indeterminate">
    <template #icon>
      <question-icon />
    </template>
    This is indeterminate helper text
  </pf-helper-text-item>
  <pf-helper-text-item variant="warning">
    <template #icon>
      <exclamation-icon />
    </template>
    This is warning helper text
  </pf-helper-text-item>
  <pf-helper-text-item variant="success">
    <template #icon>
      <xmark-icon />
    </template>
    This is success helper text
  </pf-helper-text-item>
  <pf-helper-text-item variant="error">
    <template #icon>
      <xmark-icon />
    </template>
    This is error helper text
  </pf-helper-text-item>
</pf-helper-text>`},{default:e(()=>[t(s,null,{default:e(()=>[t(n,null,{icon:e(()=>[t(a(v))]),default:e(()=>[i(" This is default helper text ")]),_:1}),t(n,{variant:"indeterminate"},{icon:e(()=>[t(a(T))]),default:e(()=>[i(" This is indeterminate helper text ")]),_:1}),t(n,{variant:"warning"},{icon:e(()=>[t(a(y))]),default:e(()=>[i(" This is warning helper text ")]),_:1}),t(n,{variant:"success"},{icon:e(()=>[t(a(h))]),default:e(()=>[i(" This is success helper text ")]),_:1}),t(n,{variant:"error"},{icon:e(()=>[t(a(h))]),default:e(()=>[i(" This is error helper text ")]),_:1})]),_:1})]),_:1}),t(l,{title:"Dynamic list",source:`<pf-helper-text>
  <pf-helper-text-item icon dynamic>This is default helper text</pf-helper-text-item>
  <pf-helper-text-item icon dynamic variant="indeterminate">This is indeterminate helper text</pf-helper-text-item>
  <pf-helper-text-item icon dynamic variant="warning">This is warning helper text</pf-helper-text-item>
  <pf-helper-text-item icon dynamic variant="success">This is success helper text</pf-helper-text-item>
  <pf-helper-text-item icon dynamic variant="error">This is error helper text</pf-helper-text-item>
</pf-helper-text>`},{default:e(()=>[t(s,null,{default:e(()=>[t(n,{icon:"",dynamic:""},{default:e(()=>[i("This is default helper text")]),_:1}),t(n,{icon:"",dynamic:"",variant:"indeterminate"},{default:e(()=>[i("This is indeterminate helper text")]),_:1}),t(n,{icon:"",dynamic:"",variant:"warning"},{default:e(()=>[i("This is warning helper text")]),_:1}),t(n,{icon:"",dynamic:"",variant:"success"},{default:e(()=>[i("This is success helper text")]),_:1}),t(n,{icon:"",dynamic:"",variant:"error"},{default:e(()=>[i("This is error helper text")]),_:1})]),_:1})]),_:1})]),_:1})}}});export{q as default};

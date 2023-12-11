import{f as w,r as s,a as i,o as S,c as T,w as n,b as p,d as e,e as o,t as r,p as V,l as N,_ as k}from"./index-pYrdSDr0.js";const h=u=>(V("data-v-8a1725ef"),u=u(),N(),u),q=h(()=>o("b",null,"toggle group",-1)),G=h(()=>o("div",{class:"markdown pf-v5-c-content"},[o("h2",{class:"pf-v5-c-title"},"Examples")],-1)),I=h(()=>o("div",{class:"markdown pf-v5-c-content"},[o("p",null,[p("The "),o("code",null,"pf-toggle-group"),p(" behaves like a multi-selection when no "),o("code",null,"v-model"),p(" prop is passed or when its value is a javascript "),o("code",null,"Array"),p(".")])],-1)),D={style:{"margin-bottom":"1em"}},J=w({__name:"ToggleGroup.story",setup(u){const d=s(!1),c=s([]),g=s(void 0),m=s(!1),f=s(!1),v=s(!1);return(A,t)=>{const _=i("component-info"),O=i("pf-switch"),a=i("pf-toggle-group-item"),b=i("pf-toggle-group"),y=i("story-canvas"),x=i("doc-page");return S(),T(x,{name:"Components/ToggleGroup.story.vue",title:"Toggle group"},{description:n(()=>[p("A "),q,p(" is a group of controls that can be used to quickly switch between actions or states.")]),apidocs:n(()=>[e(_,{src:"packages/core/src/components/ToggleGroup/ToggleGroup.vue",doc:{name:"PfToggleGroup",exportName:"default",displayName:"ToggleGroup",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"compact",description:"Modifies the toggle group to include compact styling.",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Disable all toggle group items under this component.",required:!1,type:{name:"boolean"}},{name:"modelValue",required:!1,type:{name:"T"}}],events:[{name:"update:modelValue",type:{names:["T"]}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/ToggleGroup/ToggleGroup.vue"]}},null,8,["doc"]),e(_,{src:"packages/core/src/components/ToggleGroup/ToggleGroupItem.vue",doc:{name:"PfToggleGroupItem",exportName:"default",displayName:"ToggleGroupItem",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"text",description:"Text rendered inside the toggle group item",required:!1,type:{name:"string"}},{name:"value",required:!1,type:{name:"T"}},{name:"disabled",description:"Flag indicating if the toggle group item is disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"selected",description:"Flag indicating if the toggle group item is selected",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"ariaLabel",description:"required when icon is used with no supporting text",required:!1,type:{name:"string"}},{name:"buttonId",description:"Optional id for the button within the toggle group item",required:!1,type:{name:"string"}}],events:[{name:"click",type:{names:["union"],elements:[{name:"MouseEvent"},{name:"TouchEvent"}]}},{name:"update:selected",type:{names:["boolean"]}}],slots:[{name:"icon"},{name:"default"}],sourceFiles:["../../packages/core/src/components/ToggleGroup/ToggleGroupItem.vue"]}},null,8,["doc"])]),default:n(()=>[G,e(y,{title:"Default with multiple selectable",source:`<div style="margin-bottom: 1em">
  <pf-switch v-model:checked="disabledAll" label="Disable all" />
</div>

<pf-toggle-group v-model="selectionSet" :disabled="disabledAll" aria-label="Default with multiple selectable">
  <pf-toggle-group-item text="Option 1" />
  <pf-toggle-group-item text="Option 2" value="Value of Option 2" />
  <pf-toggle-group-item text="Option 3" disabled />
</pf-toggle-group>

<pre>const selection = ref({{ JSON.stringify(selectionSet) }})</pre>`},{intro:n(()=>[I]),default:n(()=>[o("div",D,[e(O,{checked:d.value,"onUpdate:checked":t[0]||(t[0]=l=>d.value=l),label:"Disable all"},null,8,["checked"])]),e(b,{modelValue:c.value,"onUpdate:modelValue":t[1]||(t[1]=l=>c.value=l),disabled:d.value,"aria-label":"Default with multiple selectable"},{default:n(()=>[e(a,{text:"Option 1"}),e(a,{text:"Option 2",value:"Value of Option 2"}),e(a,{text:"Option 3",disabled:""})]),_:1},8,["modelValue","disabled"]),o("pre",null,"const selection = ref("+r(JSON.stringify(c.value))+")",1)]),_:1}),e(y,{title:"Default with single selectable",source:`<pf-toggle-group v-model="singleSelection" aria-label="Default with multiple selectable">
  <pf-toggle-group-item text="Option 1" />
  <pf-toggle-group-item text="Option 2" value="Value of Option 2" />
  <pf-toggle-group-item text="Option 3" />
</pf-toggle-group>

<pre>const singleSelection = ref({{ JSON.stringify(singleSelection) }})</pre>`},{default:n(()=>[e(b,{modelValue:g.value,"onUpdate:modelValue":t[2]||(t[2]=l=>g.value=l),"aria-label":"Default with multiple selectable"},{default:n(()=>[e(a,{text:"Option 1"}),e(a,{text:"Option 2",value:"Value of Option 2"}),e(a,{text:"Option 3"})]),_:1},8,["modelValue"]),o("pre",null,"const singleSelection = ref("+r(JSON.stringify(g.value))+")",1)]),_:1}),e(y,{title:"Unmanaged single selectable",source:`<pf-toggle-group aria-label="Default with multiple selectable">
  <pf-toggle-group-item v-model:selected="selected1" text="Option 1" />
  <pf-toggle-group-item v-model:selected="selected2" text="Option 2" />
  <pf-toggle-group-item v-model:selected="selected3" text="Option 3" />
</pf-toggle-group>

<pre>
  const selected1 = ref({{ JSON.stringify(selected1) }})
  const selected2 = ref({{ JSON.stringify(selected2) }})
  const selected3 = ref({{ JSON.stringify(selected3) }})
</pre>`},{default:n(()=>[e(b,{"aria-label":"Default with multiple selectable"},{default:n(()=>[e(a,{selected:m.value,"onUpdate:selected":t[3]||(t[3]=l=>m.value=l),text:"Option 1"},null,8,["selected"]),e(a,{selected:f.value,"onUpdate:selected":t[4]||(t[4]=l=>f.value=l),text:"Option 2"},null,8,["selected"]),e(a,{selected:v.value,"onUpdate:selected":t[5]||(t[5]=l=>v.value=l),text:"Option 3"},null,8,["selected"])]),_:1}),o("pre",null,"        const selected1 = ref("+r(JSON.stringify(m.value))+`)
        const selected2 = ref(`+r(JSON.stringify(f.value))+`)
        const selected3 = ref(`+r(JSON.stringify(v.value))+`)
      `,1)]),_:1})]),_:1},8,["name"])}}}),C=k(J,[["__scopeId","data-v-8a1725ef"]]);export{C as default};

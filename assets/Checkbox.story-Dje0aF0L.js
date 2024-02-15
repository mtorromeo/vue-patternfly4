import{_ as r,o as l,c as d,w as o,a as i,b as e,d as p,e as t}from"./index-CXcl0Ekg.js";const h={},b=p("b",null,"checkbox",-1);function m(u,f){const c=t("component-info"),a=t("pf-checkbox"),n=t("story-canvas"),s=t("doc-page");return l(),d(s,{name:"Components/Checkbox.story.vue",title:"Checkbox"},{description:o(()=>[i("A "),b,i(" is used to select a single item or multiple items, typically to choose elements to perform an action or to reflect a binary setting.")]),apidocs:o(()=>[e(c,{src:"packages/core/src/components/Checkbox.vue",doc:{name:"PfCheckbox",exportName:"default",displayName:"Checkbox",description:"",tags:{},expose:[{name:"input"}],props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"component",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]}},{name:"modelValue",description:"Flag to show if the checkbox is checked.",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"null"}]}},{name:"disabled",description:"Flag to show if the checkbox is disabled.",required:!1,type:{name:"boolean"}},{name:"required",description:"Flag to show if the checkbox is required.",required:!1,type:{name:"boolean"}},{name:"valid",description:"Flag to show if the checkbox selection is valid or invalid.",required:!1,type:{name:"boolean"}},{name:"id",description:"Id of the checkbox.",required:!1,type:{name:"string"}},{name:"label",description:"Label text of the checkbox.",required:!1,type:{name:"string"}},{name:"body",description:"Body of the checkbox.",required:!1,type:{name:"string"}},{name:"description",description:"Description text of the checkbox.",required:!1,type:{name:"string"}},{name:"name",required:!1,type:{name:"string"}},{name:"labelWrapped",description:'Flag to indicate whether the checkbox wrapper element is a <label> element for the checkbox input. Will not apply if a component prop (with a value other than a "label") is specified.',required:!1,type:{name:"boolean"}},{name:"labelBeforeButton",description:"Flag to show if the checkbox label is shown before the checkbox input.",required:!1,type:{name:"boolean"}}],events:[{name:"change",type:{names:["Event"]}},{name:"update:modelValue",type:{names:["boolean"]}}],slots:[{name:"label"},{name:"description"},{name:"body"}],sourceFiles:["../../packages/core/src/components/Checkbox.vue"]}},null,8,["doc"])]),default:o(()=>[e(n,{title:"Default",source:'<pf-checkbox id="basic-checkbox" label="Basic checkbox" />'},{default:o(()=>[e(a,{id:"basic-checkbox",label:"Basic checkbox"})]),_:1}),e(n,{title:"With description",source:`<pf-checkbox
id="checkbox-with-description"
label="Checkbox with description"
description="Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP." />`},{default:o(()=>[e(a,{id:"checkbox-with-description",label:"Checkbox with description",description:"Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP."})]),_:1}),e(n,{title:"With description and body",source:`<pf-checkbox
id="checkbox-with-description-and-body"
label="Checkbox with description and body"
description="Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP."
body="This is where custom content goes." />`},{default:o(()=>[e(a,{id:"checkbox-with-description-and-body",label:"Checkbox with description and body",description:"Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP.",body:"This is where custom content goes."})]),_:1})]),_:1},8,["name"])}const y=r(h,[["render",m]]);export{y as default};

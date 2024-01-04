import{f as N,r as p,o as i,c as n,w as a,a as t,b as u,k as l,d as R,e as f}from"./index-rFwgxFDJ.js";const O=R("b",null,"chip",-1),E=N({__name:"Chip.story",setup(S){const c=p(!0),C=p(!0),d=p(!0),m=p(!0),v=p(!0),g=p(!0),y=p(!0),w=p(!0),k=p(!0),b=p(!0),_=p(!0),q=p(!0),A=p(!0),B=p(!0),$=p(!0),V=p(!0);return(L,e)=>{const x=f("component-info"),o=f("pf-chip"),r=f("story-canvas"),G=f("pf-badge"),h=f("pf-chip-group"),P=f("doc-page");return i(),n(P,{name:"Components/Chip.story.vue",title:"Chip"},{description:a(()=>[t("A "),O,t(" is used to communicate a value or a set of attribute-value pairs within workflows that involve filtering a set of objects.")]),apidocs:a(()=>[u(x,{src:"packages/core/src/components/ChipGroup/Chip.vue",doc:{name:"PfChip",exportName:"default",displayName:"Chip",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"id",required:!1,type:{name:"string"}},{name:"readonly",required:!1,type:{name:"boolean"}},{name:"overflow",required:!1,type:{name:"boolean"}},{name:"component",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]},defaultValue:{func:!1,value:"'div'"}},{name:"tooltipPosition",required:!1,type:{name:"Placement"},defaultValue:{func:!1,value:"'top'"}},{name:"closeBtnAriaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'close'"}},{name:"textMaxWidth",description:"Css property expressed in percentage or any css unit that overrides the default value of the max-width of the chip's text",required:!1,type:{name:"string"}}],events:[{name:"click",type:{names:["PointerEvent"]}}],slots:[{name:"default"},{name:"badge"}],sourceFiles:["../../packages/core/src/components/ChipGroup/Chip.vue"]}},null,8,["doc"]),u(x,{src:"packages/core/src/components/ChipGroup/ChipGroup.vue",doc:{name:"PfChipGroup",exportName:"default",displayName:"ChipGroup",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"id",required:!1,type:{name:"string"}},{name:"defaultOpen",required:!1,type:{name:"boolean"}},{name:"closable",required:!1,type:{name:"boolean"}},{name:"category",required:!1,type:{name:"string"}},{name:"numChips",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"3"}},{name:"tooltipPosition",required:!1,type:{name:"Placement"},defaultValue:{func:!1,value:"'top'"}},{name:"closeBtnAriaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Close chip group'"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Chip group category'"}},{name:"expandedText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Show Less'"}},{name:"collapsedText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'${remaining} more'"}}],events:[{name:"click",type:{names:["PointerEvent"]}},{name:"overflow-chip-click",type:{names:["PointerEvent"]}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/ChipGroup/ChipGroup.vue"]}},null,8,["doc"])]),default:a(()=>[u(r,{title:"Simple",source:"<pf-chip>Chip</pf-chip>"},{default:a(()=>[u(o,null,{default:a(()=>[t("Chip")]),_:1})]),_:1}),u(r,{title:"Long",source:"<pf-chip>Really long chip that goes on and on</pf-chip>"},{default:a(()=>[u(o,null,{default:a(()=>[t("Really long chip that goes on and on")]),_:1})]),_:1}),u(r,{title:"With badge",source:`<pf-chip>
  Chip
  <pf-badge read>00</pf-badge>
</pf-chip>`},{default:a(()=>[u(o,null,{default:a(()=>[t(" Chip "),u(G,{read:""},{default:a(()=>[t("00")]),_:1})]),_:1})]),_:1}),u(r,{title:"Chip groups",source:`<pf-chip-group>
  <pf-chip v-if="showChipA1" @click="showChipA1 = false">Chip one</pf-chip>
  <pf-chip v-if="showChipA2" @click="showChipA2 = false">Really long chip that goes on and on</pf-chip>
  <pf-chip v-if="showChipA3" @click="showChipA3 = false">Chip three</pf-chip>
  <pf-chip v-if="showChipA4" @click="showChipA4 = false">Chip four</pf-chip>
  <pf-chip v-if="showChipA5" @click="showChipA5 = false">Chip five</pf-chip>
</pf-chip-group>`},{default:a(()=>[u(h,null,{default:a(()=>[c.value?(i(),n(o,{key:0,onClick:e[0]||(e[0]=s=>c.value=!1)},{default:a(()=>[t("Chip one")]),_:1})):l("",!0),C.value?(i(),n(o,{key:1,onClick:e[1]||(e[1]=s=>C.value=!1)},{default:a(()=>[t("Really long chip that goes on and on")]),_:1})):l("",!0),d.value?(i(),n(o,{key:2,onClick:e[2]||(e[2]=s=>d.value=!1)},{default:a(()=>[t("Chip three")]),_:1})):l("",!0),m.value?(i(),n(o,{key:3,onClick:e[3]||(e[3]=s=>m.value=!1)},{default:a(()=>[t("Chip four")]),_:1})):l("",!0),v.value?(i(),n(o,{key:4,onClick:e[4]||(e[4]=s=>v.value=!1)},{default:a(()=>[t("Chip five")]),_:1})):l("",!0)]),_:1})]),_:1}),u(r,{title:"Chip groups with categories",source:`<pf-chip-group category="Category One">
  <pf-chip v-if="showChipB1" @click="showChipB1 = false">Chip one</pf-chip>
  <pf-chip v-if="showChipB2" @click="showChipB2 = false">Really long chip that goes on and on</pf-chip>
  <pf-chip v-if="showChipB3" @click="showChipB3 = false">Chip three</pf-chip>
  <pf-chip v-if="showChipB4" @click="showChipB4 = false">Chip four</pf-chip>
  <pf-chip v-if="showChipB5" @click="showChipB5 = false">Chip five</pf-chip>
</pf-chip-group>`},{default:a(()=>[u(h,{category:"Category One"},{default:a(()=>[g.value?(i(),n(o,{key:0,onClick:e[5]||(e[5]=s=>g.value=!1)},{default:a(()=>[t("Chip one")]),_:1})):l("",!0),y.value?(i(),n(o,{key:1,onClick:e[6]||(e[6]=s=>y.value=!1)},{default:a(()=>[t("Really long chip that goes on and on")]),_:1})):l("",!0),w.value?(i(),n(o,{key:2,onClick:e[7]||(e[7]=s=>w.value=!1)},{default:a(()=>[t("Chip three")]),_:1})):l("",!0),k.value?(i(),n(o,{key:3,onClick:e[8]||(e[8]=s=>k.value=!1)},{default:a(()=>[t("Chip four")]),_:1})):l("",!0),b.value?(i(),n(o,{key:4,onClick:e[9]||(e[9]=s=>b.value=!1)},{default:a(()=>[t("Chip five")]),_:1})):l("",!0)]),_:1})]),_:1}),u(r,{title:"Chip groups with removable categories",source:`<pf-chip-group v-if="showGroup" category="Category has a very long name" closable @click="showGroup = false">
  <pf-chip v-if="showChipC1" @click="showChipC1 = false">Chip one</pf-chip>
  <pf-chip v-if="showChipC2" @click="showChipC2 = false">Really long chip that goes on and on</pf-chip>
  <pf-chip v-if="showChipC3" @click="showChipC3 = false">Chip three</pf-chip>
  <pf-chip v-if="showChipC4" @click="showChipC4 = false">Chip four</pf-chip>
  <pf-chip v-if="showChipC5" @click="showChipC5 = false">Chip five</pf-chip>
</pf-chip-group>`},{default:a(()=>[V.value?(i(),n(h,{key:0,category:"Category has a very long name",closable:"",onClick:e[15]||(e[15]=s=>V.value=!1)},{default:a(()=>[_.value?(i(),n(o,{key:0,onClick:e[10]||(e[10]=s=>_.value=!1)},{default:a(()=>[t("Chip one")]),_:1})):l("",!0),q.value?(i(),n(o,{key:1,onClick:e[11]||(e[11]=s=>q.value=!1)},{default:a(()=>[t("Really long chip that goes on and on")]),_:1})):l("",!0),A.value?(i(),n(o,{key:2,onClick:e[12]||(e[12]=s=>A.value=!1)},{default:a(()=>[t("Chip three")]),_:1})):l("",!0),B.value?(i(),n(o,{key:3,onClick:e[13]||(e[13]=s=>B.value=!1)},{default:a(()=>[t("Chip four")]),_:1})):l("",!0),$.value?(i(),n(o,{key:4,onClick:e[14]||(e[14]=s=>$.value=!1)},{default:a(()=>[t("Chip five")]),_:1})):l("",!0)]),_:1})):l("",!0)]),_:1})]),_:1},8,["name"])}}});export{E as default};

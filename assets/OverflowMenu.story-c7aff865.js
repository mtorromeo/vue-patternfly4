import{m as c,e as H,r as b,a as t,o as A,c as z,w as n,b as e,g as o,u as p}from"./index-a471940d.js";import{E as I}from"./ellipsis-vertical-icon-1d55abce.js";const C={name:"AlignLeftIcon",height:512,width:448,svgPath:"M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z",yOffset:0,xOffset:0},M=c(C),x=M,O={name:"AlignCenterIcon",height:512,width:448,svgPath:"M352 64c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32zm96 128c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 448c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM352 320c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32z",yOffset:0,xOffset:0},k=c(O),P=k,S={name:"AlignRightIcon",height:512,width:448,svgPath:"M448 64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z",yOffset:0,xOffset:0},T=c(S),L=T,E=H({__name:"OverflowMenu.story",setup(R){const m=b(!1);return(V,a)=>{const h=t("component-title"),f=t("pf-overflow-menu-item"),u=t("pf-overflow-menu-group"),d=t("pf-overflow-menu-content"),s=t("pf-menu-toggle"),r=t("pf-overflow-menu-dropdown-item"),v=t("pf-dropdown"),w=t("pf-overflow-menu-control"),_=t("pf-overflow-menu"),g=t("story-canvas"),l=t("pf-button"),y=t("doc-page");return A(),z(y,{title:"Overflow Menu"},{default:n(()=>[e(h,{name:"pf-overflow-menu"}),e(g,{title:"Default",style:{"min-height":"350px"},source:`<pf-overflow-menu breakpoint="lg">
  <pf-overflow-menu-content>
    <pf-overflow-menu-item>Item 1</pf-overflow-menu-item>
    <pf-overflow-menu-item>Item 2</pf-overflow-menu-item>
    <pf-overflow-menu-group>
      <pf-overflow-menu-item>Item 3</pf-overflow-menu-item>
      <pf-overflow-menu-item>Item 4</pf-overflow-menu-item>
      <pf-overflow-menu-item>Item 5</pf-overflow-menu-item>
    </pf-overflow-menu-group>
  </pf-overflow-menu-content>
  <pf-overflow-menu-control>
    <pf-dropdown v-model:open="open">
      <template #toggle>
        <pf-menu-toggle variant="plain">
          <ellipsis-vertical-icon />
        </pf-menu-toggle>
      </template>
      <pf-overflow-menu-dropdown-item shared>Item 1</pf-overflow-menu-dropdown-item>
      <pf-overflow-menu-dropdown-item shared>Item 2</pf-overflow-menu-dropdown-item>
      <pf-overflow-menu-dropdown-item shared>Item 3</pf-overflow-menu-dropdown-item>
      <pf-overflow-menu-dropdown-item shared>Item 4</pf-overflow-menu-dropdown-item>
      <pf-overflow-menu-dropdown-item shared>Item 5</pf-overflow-menu-dropdown-item>
    </pf-dropdown>
  </pf-overflow-menu-control>
</pf-overflow-menu>`},{default:n(()=>[e(_,{breakpoint:"lg"},{default:n(()=>[e(d,null,{default:n(()=>[e(f,null,{default:n(()=>[o("Item 1")]),_:1}),e(f,null,{default:n(()=>[o("Item 2")]),_:1}),e(u,null,{default:n(()=>[e(f,null,{default:n(()=>[o("Item 3")]),_:1}),e(f,null,{default:n(()=>[o("Item 4")]),_:1}),e(f,null,{default:n(()=>[o("Item 5")]),_:1})]),_:1})]),_:1}),e(w,null,{default:n(()=>[e(v,{open:m.value,"onUpdate:open":a[0]||(a[0]=i=>m.value=i)},{toggle:n(()=>[e(s,{variant:"plain"},{default:n(()=>[e(p(I))]),_:1})]),default:n(()=>[e(r,{shared:""},{default:n(()=>[o("Item 1")]),_:1}),e(r,{shared:""},{default:n(()=>[o("Item 2")]),_:1}),e(r,{shared:""},{default:n(()=>[o("Item 3")]),_:1}),e(r,{shared:""},{default:n(()=>[o("Item 4")]),_:1}),e(r,{shared:""},{default:n(()=>[o("Item 5")]),_:1})]),_:1},8,["open"])]),_:1})]),_:1})]),_:1}),e(g,{title:"Persistent",style:{"min-height":"350px"},source:`<pf-overflow-menu breakpoint="lg">
  <pf-overflow-menu-content persistent>
    <pf-overflow-menu-group type="button" persistent>
      <pf-overflow-menu-item persistent>
        <pf-button variant="primary">Primary</pf-button>
      </pf-overflow-menu-item>
      <pf-overflow-menu-item>
        <pf-button variant="secondary">Secondary</pf-button>
      </pf-overflow-menu-item>
      <pf-overflow-menu-item>
        <pf-button variant="tertiary">Tertiary</pf-button>
      </pf-overflow-menu-item>
    </pf-overflow-menu-group>
    <pf-overflow-menu-group type="icon" persistent>
      <pf-overflow-menu-item persistent>
        <pf-button variant="plain"><align-left-icon /></pf-button>
      </pf-overflow-menu-item>
      <pf-overflow-menu-item persistent>
        <pf-button variant="plain"><align-center-icon /></pf-button>
      </pf-overflow-menu-item>
      <pf-overflow-menu-item persistent>
        <pf-button variant="plain"><align-right-icon /></pf-button>
      </pf-overflow-menu-item>
    </pf-overflow-menu-group>
  </pf-overflow-menu-content>
  <pf-overflow-menu-control additional-options>
    <pf-dropdown v-model:open="open">
      <template #toggle>
        <pf-menu-toggle variant="plain">
          <ellipsis-vertical-icon />
        </pf-menu-toggle>
      </template>
      <pf-overflow-menu-dropdown-item shared>Secondary</pf-overflow-menu-dropdown-item>
      <pf-overflow-menu-dropdown-item shared>Tertiary</pf-overflow-menu-dropdown-item>
      <pf-overflow-menu-dropdown-item>Action 4</pf-overflow-menu-dropdown-item>
    </pf-dropdown>
  </pf-overflow-menu-control>
</pf-overflow-menu>`},{default:n(()=>[e(_,{breakpoint:"lg"},{default:n(()=>[e(d,{persistent:""},{default:n(()=>[e(u,{type:"button",persistent:""},{default:n(()=>[e(f,{persistent:""},{default:n(()=>[e(l,{variant:"primary"},{default:n(()=>[o("Primary")]),_:1})]),_:1}),e(f,null,{default:n(()=>[e(l,{variant:"secondary"},{default:n(()=>[o("Secondary")]),_:1})]),_:1}),e(f,null,{default:n(()=>[e(l,{variant:"tertiary"},{default:n(()=>[o("Tertiary")]),_:1})]),_:1})]),_:1}),e(u,{type:"icon",persistent:""},{default:n(()=>[e(f,{persistent:""},{default:n(()=>[e(l,{variant:"plain"},{default:n(()=>[e(p(x))]),_:1})]),_:1}),e(f,{persistent:""},{default:n(()=>[e(l,{variant:"plain"},{default:n(()=>[e(p(P))]),_:1})]),_:1}),e(f,{persistent:""},{default:n(()=>[e(l,{variant:"plain"},{default:n(()=>[e(p(L))]),_:1})]),_:1})]),_:1})]),_:1}),e(w,{"additional-options":""},{default:n(()=>[e(v,{open:m.value,"onUpdate:open":a[1]||(a[1]=i=>m.value=i)},{toggle:n(()=>[e(s,{variant:"plain"},{default:n(()=>[e(p(I))]),_:1})]),default:n(()=>[e(r,{shared:""},{default:n(()=>[o("Secondary")]),_:1}),e(r,{shared:""},{default:n(()=>[o("Tertiary")]),_:1}),e(r,null,{default:n(()=>[o("Action 4")]),_:1})]),_:1},8,["open"])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{E as default};

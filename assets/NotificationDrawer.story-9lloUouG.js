import{E as l}from"./ellipsis-vertical-icon-tp8xoYUd.js";import{M as x}from"./magnifying-glass-icon-y24FTrHx.js";import{f as S,a as n,o as k,c as V,w as i,b as e,d as t,u as a,e as w}from"./index-pYrdSDr0.js";const L=w("b",null,"notification drawer",-1),O=w("div",{class:"markdown pf-v5-c-content"},[w("h2",{class:"pf-v5-c-title"},"Examples")],-1),C=S({__name:"NotificationDrawer.story",setup(P){return(R,U)=>{const c=n("component-info"),o=n("pf-menu-toggle"),r=n("pf-dropdown-item"),s=n("pf-dropdown"),g=n("pf-notification-drawer-header"),d=n("pf-notification-drawer-list-item-header"),f=n("pf-notification-drawer-list-item-body"),p=n("pf-notification-drawer-list-item"),u=n("pf-notification-drawer-list"),h=n("pf-notification-drawer-body"),_=n("pf-notification-drawer"),v=n("story-canvas"),m=n("pf-notification-drawer-group"),y=n("pf-empty-state-header"),b=n("pf-empty-state-body"),N=n("pf-button"),T=n("pf-empty-state-actions"),D=n("pf-empty-state-footer"),A=n("pf-empty-state"),q=n("pf-notification-drawer-group-list"),I=n("doc-page");return k(),V(I,{name:"Components/NotificationDrawer.story.vue",title:"Notification drawer"},{description:i(()=>[e("A "),L,e(" is a place where users can view and manage notifications that are generated by the system. It allows them to see a list of notifications without the need to navigate away from the current screen.")]),apidocs:i(()=>[t(c,{src:"packages/core/src/components/NotificationDrawer/NotificationDrawer.vue",doc:{name:"PfNotificationDrawer",exportName:"default",displayName:"NotificationDrawer",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/NotificationDrawer/NotificationDrawer.vue"]}},null,8,["doc"]),t(c,{src:"packages/core/src/components/NotificationDrawer/NotificationDrawerBody.vue",doc:{name:"PfNotificationDrawerBody",exportName:"default",displayName:"NotificationDrawerBody",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/NotificationDrawer/NotificationDrawerBody.vue"]}},null,8,["doc"]),t(c,{src:"packages/core/src/components/NotificationDrawer/NotificationDrawerGroup.vue",doc:{name:"PfNotificationDrawerGroup",exportName:"default",displayName:"NotificationDrawerGroup",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"count",description:"Notification drawer group count",required:!0,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"expanded",description:"Adds styling to the group to indicate expanded state",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"read",description:"Adds styling to the group to indicate whether it has been read",required:!1,type:{name:"boolean"}},{name:"onExpand",description:"Callback for when group button is clicked to expand",required:!1,type:{name:"TSFunctionType"}},{name:"title",description:"Notification drawer group title",required:!1,type:{name:"string"}},{name:"truncateTitle",description:"Truncate title to number of lines",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"tooltipPosition",description:"Position of the tooltip which is displayed if text is truncated",required:!1,type:{name:"TooltipPosition"}},{name:"headingLevel",description:"Sets the heading level to use for the group title. Default is h1.",required:!1,type:{name:"union",elements:[{name:'"h1"'},{name:'"h2"'},{name:'"h3"'},{name:'"h4"'},{name:'"h5"'},{name:'"h6"'}]},defaultValue:{func:!1,value:"'h1'"}}],events:[{name:"update:expanded",type:{names:["boolean"]}}],slots:[{name:"title"},{name:"default"}],sourceFiles:["../../packages/core/src/components/NotificationDrawer/NotificationDrawerGroup.vue"]}},null,8,["doc"]),t(c,{src:"packages/core/src/components/NotificationDrawer/NotificationDrawerGroupList.vue",doc:{name:"PfNotificationDrawerGroupList",exportName:"default",displayName:"NotificationDrawerGroupList",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/NotificationDrawer/NotificationDrawerGroupList.vue"]}},null,8,["doc"]),t(c,{src:"packages/core/src/components/NotificationDrawer/NotificationDrawerHeader.vue",doc:{name:"PfNotificationDrawerHeader",exportName:"default",displayName:"NotificationDrawerHeader",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"count",description:"Notification drawer heading count",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"customText",description:"Notification drawer heading custom text which can be used instead of providing count/unreadText",required:!1,type:{name:"string"}},{name:"onClose",description:"Callback for when close button is clicked",required:!1,type:{name:"TSFunctionType"}},{name:"title",description:"Notification drawer heading title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Notifications'"}},{name:"unreadText",description:"Notification drawer heading unread text used in combination with a count",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'unread'"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/NotificationDrawer/NotificationDrawerHeader.vue"]}},null,8,["doc"]),t(c,{src:"packages/core/src/components/NotificationDrawer/NotificationDrawerList.vue",doc:{name:"PfNotificationDrawerList",exportName:"default",displayName:"NotificationDrawerList",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/NotificationDrawer/NotificationDrawerList.vue"]}},null,8,["doc"]),t(c,{src:"packages/core/src/components/NotificationDrawer/NotificationDrawerListItem.vue",doc:{name:"PfNotificationDrawerListItem",exportName:"default",displayName:"NotificationDrawerListItem",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"hoverable",description:"Modifies the list item to include hover styles on :hover",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"read",description:"Adds styling to the list item to indicate it has been read",required:!1,type:{name:"boolean"}},{name:"tabindex",description:"Tab index for the list item",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:"0"}},{name:"variant",description:"Variant indicates the severity level",required:!1,type:{name:"union",elements:[{name:'"custom"'},{name:'"success"'},{name:'"danger"'},{name:'"warning"'},{name:'"info"'}]},defaultValue:{func:!1,value:"'custom'"}}],slots:[{name:"default"}],sourceFiles:["../../packages/core/src/components/NotificationDrawer/NotificationDrawerListItem.vue"]}},null,8,["doc"]),t(c,{src:"packages/core/src/components/NotificationDrawer/NotificationDrawerListItemBody.vue",doc:{name:"PfNotificationDrawerListItemBody",exportName:"default",displayName:"NotificationDrawerListItemBody",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"timestamp",required:!1,type:{name:"string"}}],slots:[{name:"default"},{name:"timestamp"}],sourceFiles:["../../packages/core/src/components/NotificationDrawer/NotificationDrawerListItemBody.vue"]}},null,8,["doc"]),t(c,{src:"packages/core/src/components/NotificationDrawer/NotificationDrawerListItemHeader.vue",doc:{name:"PfNotificationDrawerListItem",exportName:"default",displayName:"NotificationDrawerListItemHeader",description:"",tags:{},props:[{name:"ouiaSafe",description:"Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false.",required:!1,type:{name:"boolean"}},{name:"ouiaId",description:"Value to overwrite the randomly generated data-ouia-component-id.",required:!1,type:{name:"OuiaId"}},{name:"srTitle",description:"Notification drawer list item header screen reader title",required:!1,type:{name:"string"}},{name:"title",description:"Notification drawer list item title",required:!0,type:{name:"string"}},{name:"variant",description:"Variant indicates the severity level",required:!1,type:{name:"union",elements:[{name:'"success"'},{name:'"danger"'},{name:'"warning"'},{name:'"info"'},{name:'"custom"'}]},defaultValue:{func:!1,value:"'custom'"}},{name:"truncateTitle",description:"Truncate title to number of lines",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"tooltipPosition",description:"Position of the tooltip which is displayed if text is truncated",required:!1,type:{name:"TooltipPosition"}},{name:"headingLevel",description:"Sets the heading level to use for the list item header title. Default is h2.",required:!1,type:{name:"union",elements:[{name:'"h1"'},{name:'"h2"'},{name:'"h3"'},{name:'"h4"'},{name:'"h5"'},{name:'"h6"'}]},defaultValue:{func:!1,value:"'h2'"}}],slots:[{name:"icon"},{name:"default"}],sourceFiles:["../../packages/core/src/components/NotificationDrawer/NotificationDrawerListItemHeader.vue"]}},null,8,["doc"])]),default:i(()=>[O,t(v,{title:"Basic",source:`<pf-notification-drawer>
  <pf-notification-drawer-header count="3" @close="() => {}">
    <pf-dropdown position="right">
      <template #toggle>
        <pf-menu-toggle variant="plain">
          <ellipsis-vertical-icon aria-hidden="true" />
        </pf-menu-toggle>
      </template>

      <pf-dropdown-item>Action</pf-dropdown-item>
    </pf-dropdown>
  </pf-notification-drawer-header>

  <pf-notification-drawer-body>
    <pf-notification-drawer-list aria-label="Notifications in the basic example">
      <pf-notification-drawer-list-item variant="info">
        <pf-notification-drawer-list-item-header
          variant="info"
          title="Unread info notification title"
          sr-title="Info notification:"
        >
          <pf-dropdown position="right">
            <template #toggle>
              <pf-menu-toggle variant="plain">
                <ellipsis-vertical-icon aria-hidden="true" />
              </pf-menu-toggle>
            </template>

            <pf-dropdown-item>Action</pf-dropdown-item>
          </pf-dropdown>
        </pf-notification-drawer-list-item-header>
        <pf-notification-drawer-list-item-body timestamp="5 minutes ago">
          This is an info notification description.
        </pf-notification-drawer-list-item-body>
      </pf-notification-drawer-list-item>

      <pf-notification-drawer-list-item variant="danger">
        <pf-notification-drawer-list-item-header
          variant="danger"
          title="Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines."
          sr-title="Danger notification:"
        >
          <pf-dropdown position="right">
            <template #toggle>
              <pf-menu-toggle variant="plain">
                <ellipsis-vertical-icon aria-hidden="true" />
              </pf-menu-toggle>
            </template>

            <pf-dropdown-item>Action</pf-dropdown-item>
          </pf-dropdown>
        </pf-notification-drawer-list-item-header>
        <pf-notification-drawer-list-item-body timestamp="10 minutes ago">
          This is a danger notification description. This is a long description to show how the title will wrap if
          it is long and wraps to multiple lines.
        </pf-notification-drawer-list-item-body>
      </pf-notification-drawer-list-item>

      <pf-notification-drawer-list-item variant="danger">
        <pf-notification-drawer-list-item-header
          :truncate-title="1"
          variant="danger"
          title="Unread danger notification title. This is a long title to show how the title will be truncated if it is long and will be shown in a single line."
          sr-title="Danger notification:"
        >
          <pf-dropdown position="right">
            <template #toggle>
              <pf-menu-toggle variant="plain">
                <ellipsis-vertical-icon aria-hidden="true" />
              </pf-menu-toggle>
            </template>

            <pf-dropdown-item>Action</pf-dropdown-item>
          </pf-dropdown>
        </pf-notification-drawer-list-item-header>
        <pf-notification-drawer-list-item-body timestamp="10 minutes ago">
          This is a danger notification description. This is a long description to show how the title will wrap if
          it is long and wraps to multiple lines.
        </pf-notification-drawer-list-item-body>
      </pf-notification-drawer-list-item>

      <pf-notification-drawer-list-item variant="warning" read>
        <pf-notification-drawer-list-item-header
          variant="warning"
          title="Read warning notification title"
          sr-title="Warning notification:"
        >
          <pf-dropdown position="right">
            <template #toggle>
              <pf-menu-toggle variant="plain">
                <ellipsis-vertical-icon aria-hidden="true" />
              </pf-menu-toggle>
            </template>

            <pf-dropdown-item>Action</pf-dropdown-item>
          </pf-dropdown>
        </pf-notification-drawer-list-item-header>
        <pf-notification-drawer-list-item-body timestamp="20 minutes ago">
          This is a warning notification description.
        </pf-notification-drawer-list-item-body>
      </pf-notification-drawer-list-item>

      <pf-notification-drawer-list-item variant="success" read>
        <pf-notification-drawer-list-item-header
          variant="success"
          title="Read success notification title"
          sr-title="Success notification:"
        >
          <pf-dropdown position="right">
            <template #toggle>
              <pf-menu-toggle variant="plain">
                <ellipsis-vertical-icon aria-hidden="true" />
              </pf-menu-toggle>
            </template>

            <pf-dropdown-item>Action</pf-dropdown-item>
          </pf-dropdown>
        </pf-notification-drawer-list-item-header>
        <pf-notification-drawer-list-item-body timestamp="30 minutes ago">
          This is a success notification description.
        </pf-notification-drawer-list-item-body>
      </pf-notification-drawer-list-item>

      <pf-notification-drawer-list-item read>
        <pf-notification-drawer-list-item-header title="Read (default) notification title" sr-title="notification:">
          <pf-dropdown position="right">
            <template #toggle>
              <pf-menu-toggle variant="plain">
                <ellipsis-vertical-icon aria-hidden="true" />
              </pf-menu-toggle>
            </template>

            <pf-dropdown-item>Action</pf-dropdown-item>
          </pf-dropdown>
        </pf-notification-drawer-list-item-header>
        <pf-notification-drawer-list-item-body timestamp="35 minutes ago">
          This is a default notification description.
        </pf-notification-drawer-list-item-body>
      </pf-notification-drawer-list-item>
    </pf-notification-drawer-list>
  </pf-notification-drawer-body>
</pf-notification-drawer>`},{default:i(()=>[t(_,null,{default:i(()=>[t(g,{count:"3",onClose:()=>{}},{default:i(()=>[t(s,{position:"right"},{toggle:i(()=>[t(o,{variant:"plain"},{default:i(()=>[t(a(l),{"aria-hidden":"true"})]),_:1})]),default:i(()=>[t(r,null,{default:i(()=>[e("Action")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(u,{"aria-label":"Notifications in the basic example"},{default:i(()=>[t(p,{variant:"info"},{default:i(()=>[t(d,{variant:"info",title:"Unread info notification title","sr-title":"Info notification:"},{default:i(()=>[t(s,{position:"right"},{toggle:i(()=>[t(o,{variant:"plain"},{default:i(()=>[t(a(l),{"aria-hidden":"true"})]),_:1})]),default:i(()=>[t(r,null,{default:i(()=>[e("Action")]),_:1})]),_:1})]),_:1}),t(f,{timestamp:"5 minutes ago"},{default:i(()=>[e(" This is an info notification description. ")]),_:1})]),_:1}),t(p,{variant:"danger"},{default:i(()=>[t(d,{variant:"danger",title:"Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.","sr-title":"Danger notification:"},{default:i(()=>[t(s,{position:"right"},{toggle:i(()=>[t(o,{variant:"plain"},{default:i(()=>[t(a(l),{"aria-hidden":"true"})]),_:1})]),default:i(()=>[t(r,null,{default:i(()=>[e("Action")]),_:1})]),_:1})]),_:1}),t(f,{timestamp:"10 minutes ago"},{default:i(()=>[e(" This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. ")]),_:1})]),_:1}),t(p,{variant:"danger"},{default:i(()=>[t(d,{"truncate-title":1,variant:"danger",title:"Unread danger notification title. This is a long title to show how the title will be truncated if it is long and will be shown in a single line.","sr-title":"Danger notification:"},{default:i(()=>[t(s,{position:"right"},{toggle:i(()=>[t(o,{variant:"plain"},{default:i(()=>[t(a(l),{"aria-hidden":"true"})]),_:1})]),default:i(()=>[t(r,null,{default:i(()=>[e("Action")]),_:1})]),_:1})]),_:1}),t(f,{timestamp:"10 minutes ago"},{default:i(()=>[e(" This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. ")]),_:1})]),_:1}),t(p,{variant:"warning",read:""},{default:i(()=>[t(d,{variant:"warning",title:"Read warning notification title","sr-title":"Warning notification:"},{default:i(()=>[t(s,{position:"right"},{toggle:i(()=>[t(o,{variant:"plain"},{default:i(()=>[t(a(l),{"aria-hidden":"true"})]),_:1})]),default:i(()=>[t(r,null,{default:i(()=>[e("Action")]),_:1})]),_:1})]),_:1}),t(f,{timestamp:"20 minutes ago"},{default:i(()=>[e(" This is a warning notification description. ")]),_:1})]),_:1}),t(p,{variant:"success",read:""},{default:i(()=>[t(d,{variant:"success",title:"Read success notification title","sr-title":"Success notification:"},{default:i(()=>[t(s,{position:"right"},{toggle:i(()=>[t(o,{variant:"plain"},{default:i(()=>[t(a(l),{"aria-hidden":"true"})]),_:1})]),default:i(()=>[t(r,null,{default:i(()=>[e("Action")]),_:1})]),_:1})]),_:1}),t(f,{timestamp:"30 minutes ago"},{default:i(()=>[e(" This is a success notification description. ")]),_:1})]),_:1}),t(p,{read:""},{default:i(()=>[t(d,{title:"Read (default) notification title","sr-title":"notification:"},{default:i(()=>[t(s,{position:"right"},{toggle:i(()=>[t(o,{variant:"plain"},{default:i(()=>[t(a(l),{"aria-hidden":"true"})]),_:1})]),default:i(()=>[t(r,null,{default:i(()=>[e("Action")]),_:1})]),_:1})]),_:1}),t(f,{timestamp:"35 minutes ago"},{default:i(()=>[e(" This is a default notification description. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(v,{title:"Groups",source:`<pf-notification-drawer>
  <pf-notification-drawer-header count="4">
    <pf-dropdown position="right">
      <template #toggle>
        <pf-menu-toggle variant="plain">
          <ellipsis-vertical-icon aria-hidden="true" />
        </pf-menu-toggle>
      </template>

      <pf-dropdown-item>Action</pf-dropdown-item>
    </pf-dropdown>
  </pf-notification-drawer-header>

  <pf-notification-drawer-body>
    <pf-notification-drawer-group-list>
      <pf-notification-drawer-group
        title="First notification group"
        count="2"
      >
        <pf-notification-drawer-list aria-label="Notifications in the basic example">
          <pf-notification-drawer-list-item variant="info">
            <pf-notification-drawer-list-item-header
              variant="info"
              title="Unread info notification title"
              sr-title="Info notification:"
            >
              <pf-dropdown position="right">
                <template #toggle>
                  <pf-menu-toggle variant="plain">
                    <ellipsis-vertical-icon aria-hidden="true" />
                  </pf-menu-toggle>
                </template>

                <pf-dropdown-item>Action</pf-dropdown-item>
              </pf-dropdown>
            </pf-notification-drawer-list-item-header>
            <pf-notification-drawer-list-item-body timestamp="5 minutes ago">
              This is an info notification description.
            </pf-notification-drawer-list-item-body>
          </pf-notification-drawer-list-item>

          <pf-notification-drawer-list-item variant="danger">
            <pf-notification-drawer-list-item-header
              variant="danger"
              title="Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines."
              sr-title="Danger notification:"
            >
              <pf-dropdown position="right">
                <template #toggle>
                  <pf-menu-toggle variant="plain">
                    <ellipsis-vertical-icon aria-hidden="true" />
                  </pf-menu-toggle>
                </template>

                <pf-dropdown-item>Action</pf-dropdown-item>
              </pf-dropdown>
            </pf-notification-drawer-list-item-header>
            <pf-notification-drawer-list-item-body timestamp="10 minutes ago">
              This is a danger notification description. This is a long description to show how the title will wrap if
              it is long and wraps to multiple lines.
            </pf-notification-drawer-list-item-body>
          </pf-notification-drawer-list-item>

          <pf-notification-drawer-list-item variant="warning" read>
            <pf-notification-drawer-list-item-header
              variant="warning"
              title="Read warning notification title"
              sr-title="Warning notification:"
            >
              <pf-dropdown position="right">
                <template #toggle>
                  <pf-menu-toggle variant="plain">
                    <ellipsis-vertical-icon aria-hidden="true" />
                  </pf-menu-toggle>
                </template>

                <pf-dropdown-item>Action</pf-dropdown-item>
              </pf-dropdown>
            </pf-notification-drawer-list-item-header>
            <pf-notification-drawer-list-item-body timestamp="10 minutes ago">
              This is a danger notification description. This is a long description to show how the title will wrap if
              it is long and wraps to multiple lines.
            </pf-notification-drawer-list-item-body>
          </pf-notification-drawer-list-item>

          <pf-notification-drawer-list-item variant="success" read>
            <pf-notification-drawer-list-item-header
              variant="success"
              title="Read success notification title"
              sr-title="Success notification:"
            >
              <pf-dropdown position="right">
                <template #toggle>
                  <pf-menu-toggle variant="plain">
                    <ellipsis-vertical-icon aria-hidden="true" />
                  </pf-menu-toggle>
                </template>

                <pf-dropdown-item>Action</pf-dropdown-item>
              </pf-dropdown>
            </pf-notification-drawer-list-item-header>
            <pf-notification-drawer-list-item-body timestamp="30 minutes ago">
              This is a success notification description.
            </pf-notification-drawer-list-item-body>
          </pf-notification-drawer-list-item>
        </pf-notification-drawer-list>
      </pf-notification-drawer-group>


      <pf-notification-drawer-group
        title="Second notification group"
        count="2"
      >
        <pf-notification-drawer-list aria-label="Notifications in the second group">
          <pf-notification-drawer-list-item variant="info">
            <pf-notification-drawer-list-item-header
              variant="info"
              title="Unread info notification title"
              sr-title="Info notification:"
            >
              <pf-dropdown position="right">
                <template #toggle>
                  <pf-menu-toggle variant="plain">
                    <ellipsis-vertical-icon aria-hidden="true" />
                  </pf-menu-toggle>
                </template>

                <pf-dropdown-item>Action</pf-dropdown-item>
              </pf-dropdown>
            </pf-notification-drawer-list-item-header>
            <pf-notification-drawer-list-item-body timestamp="5 minutes ago">
              This is an info notification description.
            </pf-notification-drawer-list-item-body>
          </pf-notification-drawer-list-item>

          <pf-notification-drawer-list-item variant="danger">
            <pf-notification-drawer-list-item-header
              variant="danger"
              title="Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines."
              sr-title="Danger notification:"
            >
              <pf-dropdown position="right">
                <template #toggle>
                  <pf-menu-toggle variant="plain">
                    <ellipsis-vertical-icon aria-hidden="true" />
                  </pf-menu-toggle>
                </template>

                <pf-dropdown-item>Action</pf-dropdown-item>
              </pf-dropdown>
            </pf-notification-drawer-list-item-header>
            <pf-notification-drawer-list-item-body timestamp="10 minutes ago">
              This is a danger notification description. This is a long description to show how the title will wrap
              if it is long and wraps to multiple lines.
            </pf-notification-drawer-list-item-body>
          </pf-notification-drawer-list-item>

          <pf-notification-drawer-list-item variant="warning" read>
            <pf-notification-drawer-list-item-header
              variant="warning"
              title="Read warning notification title"
              sr-title="Warning notification:"
            >
              <pf-dropdown position="right">
                <template #toggle>
                  <pf-menu-toggle variant="plain">
                    <ellipsis-vertical-icon aria-hidden="true" />
                  </pf-menu-toggle>
                </template>

                <pf-dropdown-item>Action</pf-dropdown-item>
              </pf-dropdown>
            </pf-notification-drawer-list-item-header>
            <pf-notification-drawer-list-item-body timestamp="20 minutes ago">
              This is a warning notification description.
            </pf-notification-drawer-list-item-body>
          </pf-notification-drawer-list-item>

          <pf-notification-drawer-list-item variant="success" read>
            <pf-notification-drawer-list-item-header
              variant="success"
              title="Read success notification title"
              sr-title="Success notification:"
            >
              <pf-dropdown position="right">
                <template #toggle>
                  <pf-menu-toggle variant="plain">
                    <ellipsis-vertical-icon aria-hidden="true" />
                  </pf-menu-toggle>
                </template>

                <pf-dropdown-item>Action</pf-dropdown-item>
              </pf-dropdown>
            </pf-notification-drawer-list-item-header>
            <pf-notification-drawer-list-item-body timestamp="30 minutes ago">
              This is a success notification description.
            </pf-notification-drawer-list-item-body>
          </pf-notification-drawer-list-item>
        </pf-notification-drawer-list>
      </pf-notification-drawer-group>

      <pf-notification-drawer-group
        title="Third notification group. This is a long title to show how the title will be truncated if it is long and will be shown in a single line."
        count="0"
        :truncate-title="1"
        read
      >
        <pf-notification-drawer-list aria-label="Notifications in the third group">
          <pf-empty-state variant="full">
            <pf-empty-state-header heading-level="h2" title="No alerts found">
              <template #icon>
                <magnifying-glass-icon />
              </template>
            </pf-empty-state-header>
            <pf-empty-state-body>
              There are currently no critical alerts firing. There may be firing alerts of other severities or
              silenced critical alerts however.
            </pf-empty-state-body>
            <pf-empty-state-footer>
              <pf-empty-state-actions>
                <pf-button variant="link">Action</pf-button>
              </pf-empty-state-actions>
            </pf-empty-state-footer>
          </pf-empty-state>
        </pf-notification-drawer-list>
      </pf-notification-drawer-group>

    </pf-notification-drawer-group-list>
  </pf-notification-drawer-body>
</pf-notification-drawer>`},{default:i(()=>[t(_,null,{default:i(()=>[t(g,{count:"4"},{default:i(()=>[t(s,{position:"right"},{toggle:i(()=>[t(o,{variant:"plain"},{default:i(()=>[t(a(l),{"aria-hidden":"true"})]),_:1})]),default:i(()=>[t(r,null,{default:i(()=>[e("Action")]),_:1})]),_:1})]),_:1}),t(h,null,{default:i(()=>[t(q,null,{default:i(()=>[t(m,{title:"First notification group",count:"2"},{default:i(()=>[t(u,{"aria-label":"Notifications in the basic example"},{default:i(()=>[t(p,{variant:"info"},{default:i(()=>[t(d,{variant:"info",title:"Unread info notification title","sr-title":"Info notification:"},{default:i(()=>[t(s,{position:"right"},{toggle:i(()=>[t(o,{variant:"plain"},{default:i(()=>[t(a(l),{"aria-hidden":"true"})]),_:1})]),default:i(()=>[t(r,null,{default:i(()=>[e("Action")]),_:1})]),_:1})]),_:1}),t(f,{timestamp:"5 minutes ago"},{default:i(()=>[e(" This is an info notification description. ")]),_:1})]),_:1}),t(p,{variant:"danger"},{default:i(()=>[t(d,{variant:"danger",title:"Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.","sr-title":"Danger notification:"},{default:i(()=>[t(s,{position:"right"},{toggle:i(()=>[t(o,{variant:"plain"},{default:i(()=>[t(a(l),{"aria-hidden":"true"})]),_:1})]),default:i(()=>[t(r,null,{default:i(()=>[e("Action")]),_:1})]),_:1})]),_:1}),t(f,{timestamp:"10 minutes ago"},{default:i(()=>[e(" This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. ")]),_:1})]),_:1}),t(p,{variant:"warning",read:""},{default:i(()=>[t(d,{variant:"warning",title:"Read warning notification title","sr-title":"Warning notification:"},{default:i(()=>[t(s,{position:"right"},{toggle:i(()=>[t(o,{variant:"plain"},{default:i(()=>[t(a(l),{"aria-hidden":"true"})]),_:1})]),default:i(()=>[t(r,null,{default:i(()=>[e("Action")]),_:1})]),_:1})]),_:1}),t(f,{timestamp:"10 minutes ago"},{default:i(()=>[e(" This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. ")]),_:1})]),_:1}),t(p,{variant:"success",read:""},{default:i(()=>[t(d,{variant:"success",title:"Read success notification title","sr-title":"Success notification:"},{default:i(()=>[t(s,{position:"right"},{toggle:i(()=>[t(o,{variant:"plain"},{default:i(()=>[t(a(l),{"aria-hidden":"true"})]),_:1})]),default:i(()=>[t(r,null,{default:i(()=>[e("Action")]),_:1})]),_:1})]),_:1}),t(f,{timestamp:"30 minutes ago"},{default:i(()=>[e(" This is a success notification description. ")]),_:1})]),_:1})]),_:1})]),_:1}),t(m,{title:"Second notification group",count:"2"},{default:i(()=>[t(u,{"aria-label":"Notifications in the second group"},{default:i(()=>[t(p,{variant:"info"},{default:i(()=>[t(d,{variant:"info",title:"Unread info notification title","sr-title":"Info notification:"},{default:i(()=>[t(s,{position:"right"},{toggle:i(()=>[t(o,{variant:"plain"},{default:i(()=>[t(a(l),{"aria-hidden":"true"})]),_:1})]),default:i(()=>[t(r,null,{default:i(()=>[e("Action")]),_:1})]),_:1})]),_:1}),t(f,{timestamp:"5 minutes ago"},{default:i(()=>[e(" This is an info notification description. ")]),_:1})]),_:1}),t(p,{variant:"danger"},{default:i(()=>[t(d,{variant:"danger",title:"Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.","sr-title":"Danger notification:"},{default:i(()=>[t(s,{position:"right"},{toggle:i(()=>[t(o,{variant:"plain"},{default:i(()=>[t(a(l),{"aria-hidden":"true"})]),_:1})]),default:i(()=>[t(r,null,{default:i(()=>[e("Action")]),_:1})]),_:1})]),_:1}),t(f,{timestamp:"10 minutes ago"},{default:i(()=>[e(" This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines. ")]),_:1})]),_:1}),t(p,{variant:"warning",read:""},{default:i(()=>[t(d,{variant:"warning",title:"Read warning notification title","sr-title":"Warning notification:"},{default:i(()=>[t(s,{position:"right"},{toggle:i(()=>[t(o,{variant:"plain"},{default:i(()=>[t(a(l),{"aria-hidden":"true"})]),_:1})]),default:i(()=>[t(r,null,{default:i(()=>[e("Action")]),_:1})]),_:1})]),_:1}),t(f,{timestamp:"20 minutes ago"},{default:i(()=>[e(" This is a warning notification description. ")]),_:1})]),_:1}),t(p,{variant:"success",read:""},{default:i(()=>[t(d,{variant:"success",title:"Read success notification title","sr-title":"Success notification:"},{default:i(()=>[t(s,{position:"right"},{toggle:i(()=>[t(o,{variant:"plain"},{default:i(()=>[t(a(l),{"aria-hidden":"true"})]),_:1})]),default:i(()=>[t(r,null,{default:i(()=>[e("Action")]),_:1})]),_:1})]),_:1}),t(f,{timestamp:"30 minutes ago"},{default:i(()=>[e(" This is a success notification description. ")]),_:1})]),_:1})]),_:1})]),_:1}),t(m,{title:"Third notification group. This is a long title to show how the title will be truncated if it is long and will be shown in a single line.",count:"0","truncate-title":1,read:""},{default:i(()=>[t(u,{"aria-label":"Notifications in the third group"},{default:i(()=>[t(A,{variant:"full"},{default:i(()=>[t(y,{"heading-level":"h2",title:"No alerts found"},{icon:i(()=>[t(a(x))]),_:1}),t(b,null,{default:i(()=>[e(" There are currently no critical alerts firing. There may be firing alerts of other severities or silenced critical alerts however. ")]),_:1}),t(D,null,{default:i(()=>[t(T,null,{default:i(()=>[t(N,{variant:"link"},{default:i(()=>[e("Action")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["name"])}}});export{C as default};

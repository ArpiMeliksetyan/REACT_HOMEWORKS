import{j as e}from"./jsx-runtime-DQ32znRX.js";import{r as m}from"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";function r({initialValue:o}){let[n,a]=m.useState(o);function c(){a(++n)}function l(){a(--n)}return e.jsxs("div",{role:"CounterComponent",children:[e.jsxs("p",{children:["Count: ",n]}),e.jsx("button",{role:"IncrementButton",onClick:c,children:"Increment"}),e.jsx("button",{role:"DecrementButton",onClick:l,children:"Decrement"})]})}try{r.displayName="Counter",r.__docgenInfo={description:"",displayName:"Counter",props:{initialValue:{defaultValue:null,description:"",name:"initialValue",required:!0,type:{name:"number"}}}}}catch{}const _={title:"Components/Counter",component:r,argTypes:{initialValue:{control:{type:"number"}}}},t={args:{initialValue:0}};var i,s,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    initialValue: 0
  }
}`,...(u=(s=t.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const f=["Default"];export{t as Default,f as __namedExportsOrder,_ as default};

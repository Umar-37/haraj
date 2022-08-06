var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_3e01a4ca = require("../../_app/immutable/chunks/index-3e01a4ca.js");
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: "input.svelte-1950f7d{border-radius:0.5rem;--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity));padding-top:0.5rem;padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem;font-weight:600;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}input.svelte-1950f7d:hover{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))\n}input.svelte-1950f7d:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:rgb(96 165 250 / var(--tw-ring-opacity));--tw-ring-opacity:0.75\n}",
  map: null
};
const Routes = (0, import_index_3e01a4ca.c)(($$result, $$props, $$bindings, slots) => {
  let { url = false } = $$props;
  let { json = { title: void 0 } } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.json === void 0 && $$bindings.json && json !== void 0)
    $$bindings.json(json);
  $$result.css.add(css);
  {
    console.log(url);
  }
  return `


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to read the documentation</p>
<h1 class="${"text-2xl bg-red-300"}">s</h1>
<a href="${"/about"}">here</a>
<div></div>
<button>click</button>

<form netlify action="${""}" method="${"post"}"><input name="${"pokemon"}" type="${"text"}" class="${"svelte-1950f7d"}">
  <button type="${"submit"}">submit</button></form>
${url ? `<div>${(0, import_index_3e01a4ca.e)(url)}</div>

<div>${(0, import_index_3e01a4ca.e)(json.title)}</div>` : ``}`;
});

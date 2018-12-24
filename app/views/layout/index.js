import m from 'mithril';

// import menu from '../menu';

export default {
  view: function (vnode) {
    return m('.layout', [
      // m(menu),
      vnode.children
    ]);
  }
}
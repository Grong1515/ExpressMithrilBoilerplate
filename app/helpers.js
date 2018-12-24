import m from 'mithril';

export function wrap (node, child) {
  return {
    render: function () {
      return m(node, m(child));
    }
  }
}
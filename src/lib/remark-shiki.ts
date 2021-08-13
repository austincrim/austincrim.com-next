import { visit } from 'unist-util-visit'
import { getHighlighter } from 'shiki'

export default function attacher() {
  return transformer

  async function transformer(tree) {
    const highlighter = await getHighlighter({
      theme: 'github-dark',
      langs: ['javascript', 'jsx', 'typescript', 'rust', 'go', 'html', 'css', 'cobol']
    })
    visit(tree, 'code', visitor)

    function visitor(node) {
      const highlighted = highlighter.codeToHtml(node.value, node.lang)
      node.type = 'html'
      node.value = highlighted
    }
  }
}
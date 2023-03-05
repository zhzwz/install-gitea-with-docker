// 首页
(function () {
  if (location.pathname === '/') {
    document.querySelectorAll('h2').forEach(element => {
      element.innerText = '暂不开放注册'
    })
    document.querySelectorAll('.home>div:nth-child(n+2)').forEach(element => {
      element.remove()
    })
  }
})();

// 左侧页脚
(function () {
  const element = document.querySelector('footer > div > div.left')
  const regexp = /<strong>(?<pageCostMs>[\d]+)ms<\/strong>[\s\S]+<strong>(?<templateCostMs>[\d]+)ms<\/strong>/
  const matches = element.innerHTML.match(regexp)
  if (matches) {
    const { pageCostMs, templateCostMs } = matches.groups
    const text = `© ${new Date().getFullYear()} 赵自为 | 页面 ${pageCostMs}ms | 模板 ${templateCostMs}ms | Gitea`
    element.innerText = text
  }
})();

// 右侧页脚
(function () {
  const element = document.querySelector('footer div div.right');
  element?.remove();
})();

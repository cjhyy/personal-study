# 确保脚本抛出遇到的错误
set -e

# # 生成静态文件
# npm run build

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
  git config --global user.email "chenjunhong54321@163.com"
  git config --global user.name "cjhyy"
git add -A
git commit -m 'deploy'



# 如果发布到 https://<USERNAME>.github.io/<REPO>
 git push -f https://github.com/cjhyy/personal-study.git master:gh-pages

cd -
# CONFIGURAÇÃO Lighthouse 

O Lighthouse foi configurado localhost e no github. 
Ao configurar o Lighthouse localhost temos um ganho muito grande em tempo de resposta e confiabilidade, não tendo perda de velocidade ou ocilação devido a instabilidade da internet. 
Já a integração feita com o github temos praticidade na verificações, pois a cada commit será feito um pipeline onde irá rodar o script e apresentar o resultado da performace por um link do lighthouse. 

## Configuração localhost

O arquivo lighthouse.js é responsável pela configuração localhost
É ncecessario instalar as dempendencias do linghthouse utilizando o seguinte comando 'npm install -g @lhci/cli'
Para verificar a performace do projeto utiliza-se o seguinte comando 'lhci autorun'

## Configuração github

Para configurar o github é preciso de configurar localhost primeiro, após a configuração localhost abra o repositorio no github > configurações > secrets > Dependabot > Adicione as credenciais fornecidas ao autorizar a integração do app com o github. 
Cire uma pasta de nome .github > dentro dela crie outra de nome workflows e adicione um arquivo de extensão .yaml para ser executado no pipeline do github. 
O arquivo 'lighthouse-ci.yaml' é responsável pela configuração do pipeline/github

Segue alguns links auxiliares e documentações: 
- [Lighthouse CI](https://web.dev/lighthouse-ci/).
- [App de integração github](https://github.com/apps/lighthouse-ci).
- [Github](https://github.com/GoogleChrome/lighthouse-ci).

# Testes

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

**Caso de Teste** | **CT01 - Criar conta**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://cineclub-lilac.vercel.app/ <br> 2) Clique no botão "Cadastrar" <br> 2.1) Preencha todos os campos: nome, email, senha, confirmar senha <br> 2.2) Escolha suas preferências indicando os gêneros desejados clicando nos botões  3)Clique no botão "Salvar".
**Requisitos associados** | RF-011
**Resultado esperado** | Prosseguir para a tela de login
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT02 - Fazer o login na sistema**
 :--------------: | ------------
**Procedimento**  | 1) Preencha todos os campos do formulário: email e senha <br> 2) Clique no botão "logar" <br> 
**Requisitos associados** | RF-001
**Resultado esperado** | Usuário logado no sistema 
**Dados de entrada** | Inserção de dados válidos no formulário de login
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT03 - Acessar a pagina do usuario logado**
 :--------------: | ------------
**Procedimento**  | 1) Verificar se o menu lateral apresenta o nome do usuario logado <br> 2) Verificar se o banner principal aparece a sugestão de filme <br> 3) verificar se a lista de filmes recomendados carregou sem erros <br>
**Requisitos associados** | RF-003, RF-004
**Resultado esperado** | Usuário logado no sistema visualizando os filmes recomentados e devidamente identificado
**Dados de entrada** | Inserção de dados válidos no formulário de login
**Resultado obtido** | Sucesso

## Registro dos Testes de Software

|*Caso de Teste*                                 |**CT01 - Criar conta**                                         |
|---|---|
|Requisito Associado | RF-011 - Permitir que o usuário faça o cadastro do seu nome, senha, email e suas preferências pessoais para as categorias ou gêneros que mais se identifica.|
|Link do vídeo do teste realizado: | https://1drv.ms/u/s!AhD2JqpOUvJChapRtRSQ9vPzbNLwGA?e=mxZs6t| 

|*Caso de Teste*                                 |**CT02 - Fazer o login na sistema**                          |
|---|---|
|Requisito Associado | RF-001 - Permitir que o usuário faça login na plataforma. Os usuários devem poder acessar a plataforma através de um sistema de autenticação seguro, utilizando um nome de usuário e senha|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

|*Caso de Teste*                                 |**CT03 - Acessar a pagina do usuario logado**          |
|---|---|
|Requisito Associado | RF-003 - Permitir que os usuários possam visualizar informações detalhadas sobre cada filme, incluindo sinopse, elenco, avaliações, gênero e qual streaming está disponível ou se está disponível para aluguel; RF-004 Permitir que os usuários recebam indicações com base nos filmes já assistidos, preferências e em acordo com seu perfil de visualização|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar |

## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.





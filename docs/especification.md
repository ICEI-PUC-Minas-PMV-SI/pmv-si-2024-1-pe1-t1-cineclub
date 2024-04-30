# Especificações do Projeto






## Personas

Sandra, uma mulher de 33 anos, vive em São Paulo, Brasil, e trabalha na área de publicidade. Apesar de solteira, prefere passar suas noites em casa na companhia de seu gato. Sandra, como entusiasta de serviços de streaming, ela está constantemente à procura do próximo programa ou filme para assistir. No entanto, muitas vezes, enfrenta dificuldade em tomar uma decisão devido à ampla variedade de opções disponíveis. Além disso, quando sabe qual filme deseja assistir, às vezes tem dificuldade em encontrá-lo entre os diversos serviços de streaming. Sandra adora ficar por dentro das novidades do universo do cinema e séries, acompanhar eventos e descobrir quais filmes são indicados em premiações.

Ricardo, um engenheiro de software de 45 anos do Rio de Janeiro, Brasil, desfruta de uma vida social ativa ao lado de sua esposa e filhos. Ele adora sair para jantar com amigos e tem uma paixão pela música, tocando guitarra nas horas vagas.  Ricardo, à noite, após um dia de trabalho na área de tecnologia, Ricardo gosta de relaxar em casa e assistir a filmes de ação, filmes em família ou documentários interessantes nos serviços de streaming, onde ele aprecia a diversidade de opções disponíveis para escolher. Além disso, ele precisa de ter listas salvas como favoritos e indicações com sabe no que ele assistiu. 

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Sara | Quero uma lista de filmes que combine com minha personalidade          | Não ter fadiga de opções
|Ricardo | Quero uma lista de filmes por gênero que abranja todos os serviços de streaming | Saber onde encontrar o filme que desejar 
|Sara  | Preciso de uma lista dos meus filmes já assistidos | Recordar do que já assisti
|Ricardo | Encontrar novos filmes e documentários | Expandir meus horizontes
|Sara | Avaliar filmes dando estrelas com notas de 1 a 5 | Para que possa compartilhar com meus amigos
|Ricardo | Quero uma lista de filmes que seja apenas para família | Para que meus filhos possam assistir
|Sara  | Preciso ter indicações de novos filmes que ainda serão lançados nos serviços de streaming| Para assistir os filmes 
|Sara  | Preciso saber as datas das premiações e filmes indicados | Para se manter ataulizada
|Sara  | Preciso poder compartilhar meus filmes assistidos e avaliações nas redes sociais| Para meus amigos saberem o que estou assistindo
## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
ID	Descrição do Requisito	Prioridade
RF-001	Permitir que o usuário faça login na plataforma. Os usuários devem poder acessar a plataforma através de um sistema de autenticação seguro, utilizando um nome de usuário e senha 	| ALTA |
RF-002	Permitir que o usuário pesquise filmes por título	| ALTA |
RF-003	Permitir que os usuários possam visualizar informações detalhadas sobre cada filme, incluindo sinopse, elenco, avaliações, gênero e qual streaming está disponível ou se está disponível para aluguel	| ALTA |
RF-004	Permitir que os usuários recebam indicações com base nos filmes já assistidos	| MÉDIA |
RF-005	Permitir que o usuário possa compartilhar nas redes sociais os filmes que assistiram e a nota atribuída	| ALTA |
RF-006	Permitir que os usuários possam encontrar filmes por faixa etária | ALTA |
RF-007	Permitir que Sara receba recomendações personalizadas de filmes com base em suas preferências e perfil de visualização	| ALTA 
RF-008	Permitir que Ricardo receba notificações sobre lançamentos de novos filmes e documentários em serviços de streaming |	ALTA |
RF-009	Permitir que Sara visualize o calendário de premiações e eventos relacionados ao cinema para ficar atualizada | ALTA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Desempenho : A aplicação deve ser rápida e responsiva.   |  ALTA | 
|RNF-002| Compatibilidade : A aplicação deve ser compatível com uma ampla variedade de dispositivos e navegadores, garantindo uma experiência consistente em diferentes plataformas.   |  ALTA |
|RNF-003| Acessibilidade : A aplicação deve ser acessível para pessoas com deficiência, seguindo as diretrizes de acessibilidade da Web e fornecendo recursos como navegação por teclado e leitores de tela.   | ALTA | 
|RNF - 004| Não usaremos banco de dados nessa aplicação, os dados serão provinientes de um mock. 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01|Todas as imagens e conteúdos utilizados no aplicativo devem ser devidamente licenciados para evitar violações de direitos autorais.  |
|02| O sistema deve ser desenvolvido usando metodologias ágeis.         |
|03| O aplicativo deve ser compatível com as principais plataformas móveis, como iOS e Android. |
|04| A equipe de desenvolvimento deve seguir as diretrizes de design de interface do usuário estabelecidas pela plataforma alvo. |
|05| A entrega do projeto deve ser no final do semestre. 

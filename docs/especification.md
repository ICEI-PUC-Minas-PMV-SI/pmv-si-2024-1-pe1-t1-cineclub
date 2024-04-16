# Especificações do Projeto

Nas especificações do projeto, vamos abordar uma panorâmica detalhada do Cineclube, uma plataforma voltada para entusiastas do cinema. Essas etapas nos ajudarão a definir de forma precisa os requisitos e características da plataforma do Cineclube, garantindo que a solução proposta seja eficaz e atenda às expectativas dos usuários e do mercado. Para elaborar as especificações do projeto, empregaremos várias técnicas e ferramentas comuns na concepção de projetos digitais: 
Análise do Contexto do Mercado: Realizaremos uma análise minuciosa do mercado de streaming de filmes, incluindo avaliação de tendências, estudo da concorrência e compreensão das necessidades dos usuários. 
Definição do Problema e Solução Proposta: Com base na análise do mercado, identificaremos os principais desafios enfrentados pelos usuários, como a dificuldade em encontrar filmes que correspondam aos seus gostos. Em seguida, proporemos uma solução adequada para atender a essas necessidades. 
Criação de Personas: Desenvolveremos personas que representem os diferentes perfis de usuários do Cineclube, como cinéfilos ávidos por descobrir obras obscuras e espectadores casuais em busca de entretenimento. 
Histórias de Usuários: A partir das personas definidas, criaremos histórias de usuários que descrevem situações de uso da plataforma, detalhando as necessidades específicas dos usuários e os objetivos que desejam alcançar. 
Requisitos Funcionais e Não Funcionais: Com base nas histórias de usuários, identificaremos os requisitos funcionais, como funcionalidades de busca avançada, e requisitos não funcionais, como requisitos de desempenho e segurança. 
Restrições do Projeto: Enumeraremos as restrições que podem influenciar o escopo do projeto, como prazos de desenvolvimento e limitações de recursos. 

## Personas

Nome: Sandra 

Idade: 33 anos 

Localização: São Paulo, Brasil 

Estado Civil: Solteira 

Ocupação: Trabalha na área de publicidade 

Estilo de Vida: Gosta de passar as noites em casa 

Interesses: Assinante de diversos serviços de streaming 

Situação: Morando sozinha com seu gato, procura por algo para assistir nas noites em casa, mas muitas vezes se vê indecisa diante da variedade de opções disponíveis nos serviços de streaming. 




## Histórias de Usuários

Como Sandra, uma publicitária de 33 anos de São Paulo, solteira e com um gato de estimação, desejo receber recomendações personalizadas de filmes com base nas minhas preferências e interesses, para facilitar a escolha do que assistir durante minhas noites em casa. 

Como Ricardo, um estudante universitário de 21 anos, apaixonado por cinema de terror, desejo ter acesso a uma seção exclusiva com uma ampla seleção de filmes de terror, para explorar novas produções do meu gênero favorito. 

Como João, um executivo de 45 anos, casado e pai de dois filhos, desejo encontrar filmes adequados para assistir em família, para garantir momentos de entretenimento e diversão com meus filhos. 

Como Ana, uma professora aposentada de 65 anos, desejo descobrir filmes clássicos e obras cinematográficas aclamadas pela crítica, para expandir meu conhecimento e apreciar a arte do cinema. 

Como Pedro, um cinéfilo aficionado por filmes de ficção científica, desejo receber notificações sobre lançamentos e eventos especiais relacionados ao meu gênero favorito, para não perder nenhuma novidade do mundo do cinema. 

Como Maria, uma jovem de 28 anos que adora comédias românticas, desejo ter a opção de criar uma lista de filmes favoritos e compartilhá-la com meus amigos, para recomendarmos uns aos outros nossas melhores escolhas. 

Como Carlos, um crítico de cinema renomado, desejo ter acesso antecipado a exibições exclusivas e pré-estreias de filmes, para escrever análises e resenhas detalhadas para meu público. 

Como Amanda, uma estudante de cinema de 20 anos, desejo encontrar documentários informativos e inspiradores sobre diversos temas, para me aprofundar em assuntos de meu interesse e ampliar minha visão de mundo. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| A aplicação deve permitir que o usuário faça login na plataforma.
           Os usuários devem poder acessar a plataforma através de um sistema de autenticação seguro, utilizando um nome de usuário e senha.| ALTA |  
|RF-002| A aplicação deve permitir que o usuário pesquise filmes por título.   | ALTA | 
|RF-003| A aplicação deve permitir que o usuário faça login na plataforma.| ALTA |  
|RF-004| A aplicação deve permitir que o usuário pesquise filmes por título.   | MÉDIA | 
|RF-005| A aplicação deve permitir que o usuário faça login na plataforma.| ALTA |  
|RF-006| A aplicação deve permitir que o usuário pesquise filmes por título.   | MÉDIA | 
|RF-007| A aplicação deve permitir que o usuário faça login na plataforma.| BAIXA |  
|RF-008| A aplicação deve permitir que o usuário pesquise filmes por título.   | MÉDIA | 
|RF-009| A aplicação deve permitir que o usuário faça login na plataforma.| MÉDIA |  
|RF-010| A aplicação deve permitir que o usuário pesquise filmes por título.   | BAIXA | 
|RF-011| A aplicação deve permitir que o usuário faça login na plataforma.| BAIXA |  
|RF-012| A aplicação deve permitir que o usuário pesquise filmes por título.   | BAIXA | 
|RF-013| A aplicação deve permitir que o usuário faça login na plataforma.| MEDÍA |  
|RF-014| A aplicação deve permitir que o usuário pesquise filmes por título.   | ALTA | 


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Segurança  | ALTA | 
|RNF-002| Desempenho  |  ALTA | 
|RNF-003| Confiabilidade  | ALTA | 
|RNF-004|  Escalabilidade  |  MEDÍA |
|RNF-005| Usabilidade  | ALTA | 
|RNF-006| Compatibilidade  |  ALTA |
|RNF-007| Manutenibilidade  | MÉDIA | 
|RNF-008| Localização |  MEDÍA |
|RNF-009| Acessibilidade  | ALTA | 
|RNF-010| Backup e Recuperação  |  ALTA |

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01|Todas as imagens e conteúdos utilizados no aplicativo devem ser devidamente licenciados para evitar violações de direitos autorais.  |
|02| O sistema deve ser desenvolvido usando metodologias ágeis.         |
|03| O aplicativo deve ser compatível com as principais plataformas móveis, como iOS e Android. |
|04| A equipe de desenvolvimento deve seguir as diretrizes de design de interface do usuário estabelecidas pela plataforma alvo. |
|05| Todas as transações financeiras realizadas pelo aplicativo devem ser criptografadas para garantir a segurança dos dados do usuário.         |
|06| O tempo de resposta do sistema para interações do usuário não deve exceder 2 segundos para garantir uma experiência de usuário responsiva.  |
|07| O aplicativo deve oferecer suporte a múltiplos idiomas para atender a uma base de usuários diversificada.      |
|08| As informações pessoais dos usuários, como nome, endereço e informações de pagamento, devem ser armazenadas de forma segura e em conformidade com os padrões de segurança de dados.  |
|09| O aplicativo deve ser otimizado para desempenho e eficiência de uso de recursos, minimizando o consumo de bateria e dados.        |
|10| Deve ser implementado um sistema de backup regular para proteger os dados do usuário contra perda ou corrupção.  |
|11| O aplicativo não deve permitir o compartilhamento não autorizado de conteúdo protegido por direitos autorais entre usuários.      |
|12| O sistema deve ser capaz de lidar com um grande número de usuários simultâneos sem comprometer o desempenho ou a estabilidade. 

  |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

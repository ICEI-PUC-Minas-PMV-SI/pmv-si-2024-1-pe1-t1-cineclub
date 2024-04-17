# Especificações do Projeto






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
|RF-001| A aplicação deve permitir que o usuário faça login na plataforma.Os usuários devem poder acessar a plataforma através de um sistema de autenticação seguro, utilizando um nome de usuário e senha.| ALTA |  
|RF-002| A aplicação deve permitir que o usuário pesquise filmes por título. Os usuários devem poder pesquisar filmes na plataforma digitando o título desejado em um campo de busca.| ALTA | 
|RF-003| A aplicação deve permitir que o usuário faça login na plataforma.Após a pesquisa, os usuários devem poder visualizar informações detalhadas sobre cada filme, incluindo sinopse, elenco, avaliações e gênero.| ALTA |  
|RF-004| A aplicação deve permitir que o usuário pesquise filmes por título.Os usuários devem poder adicionar filmes à sua lista de favoritos para acessá-los facilmente posteriormente.    | MÉDIA | 
|RF-005| A aplicação deve permitir que o usuário faça login na plataforma.Com base no histórico de visualização e nas interações do usuário, a plataforma deve sugerir filmes que possam ser do interesse do usuário.| ALTA |  
|RF-006| A aplicação deve permitir que o usuário pesquise filmes por título.Os usuários devem poder atribuir uma classificação e deixar comentários sobre os filmes que assistiram.    | MÉDIA | 
|RF-007| A aplicação deve permitir que o usuário faça login na plataforma.Os usuários devem poder visualizar um calendário com os lançamentos de filmes nos cinemas e nos serviços de streaming. | BAIXA |  
|RF-008| A aplicação deve permitir que o usuário pesquise filmes por título.Os usuários devem poder criar listas personalizadas de filmes, como "Filmes para Assistir", "Filmes Assistidos", entre outras.    | MÉDIA | 
|RF-009| A aplicação deve permitir que o usuário faça login na plataforma.Os usuários devem poder refinar suas buscas por filmes utilizando filtros como gênero, ano de lançamento, diretor, entre outros. A plataforma deve estar disponível em diferentes idiomas para atender a uma ampla variedade de usuários. | MÉDIA |  
|RF-010| A aplicação deve permitir que o usuário pesquise filmes por título.A aplicação deve permitir que os usuários compartilhem informações sobre filmes, sessões agendadas e avaliações em suas redes sociais, como Facebook, Twitter e Instagram.    | BAIXA | 
|RF-011| A aplicação deve permitir que o usuário faça login na plataforma.A aplicação deve permitir que os usuários compartilhem informações sobre filmes, sessões agendadas e avaliações em suas redes sociais, como Facebook, Twitter e Instagram. | BAIXA |  
|RF-012| A aplicação deve permitir que o usuário pesquise filmes por título. A aplicação deve listar uma lista de filmes acessados ou pesquisados ou pelos usuários.  | BAIXA | 
|RF-013| A aplicação deve permitir que o usuário faça login na plataforma.O software deve oferecer notícias sobre o mundo do cinema, como lançamentos, destaques do ano, recordações e etc. | MEDÍA |  
|RF-014| A aplicação deve permitir que o usuário pesquise filmes por título.Disponibilizar planos com diferentes tipos de funcionalidades e vantagens especificas para cada um dos planos.   | ALTA | 


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Segurança: A aplicação deve garantir a segurança dos dados dos usuários, utilizando criptografia para proteger informações sensíveis, como senhas e informações de pagamento.  | ALTA | 
|RNF-002| Desempenho : A aplicação deve ser rápida e responsiva, garantindo tempos de carregamento rápidos e uma experiência de usuário fluida, mesmo em picos de tráfego.   |  ALTA | 
|RNF-003| Confiabilidade : A aplicação deve ser altamente confiável, garantindo disponibilidade constante e mínima ocorrência de falhas ou erros.  | ALTA | 
|RNF-004|  Escalabilidade : A aplicação deve ser projetada para escalabilidade, sendo capaz de lidar com um aumento significativo no número de usuários e de filmes cadastrados sem comprometer o desempenho.  |  MEDÍA |
|RNF-005| Usabilidade : A aplicação deve ser intuitiva e de fácil utilização, garantindo que usuários de diferentes níveis de habilidade possam navegar e interagir com a plataforma sem dificuldades.  | ALTA | 
|RNF-006| Compatibilidade : A aplicação deve ser compatível com uma ampla variedade de dispositivos e navegadores, garantindo uma experiência consistente em diferentes plataformas.   |  ALTA |
|RNF-007| Manutenibilidade : A aplicação deve ser facilmente mantida e atualizada, utilizando boas práticas de desenvolvimento de software e documentação clara do código-fonte.  | MÉDIA | 
|RNF-008| Localização : A aplicação deve oferecer suporte à localização, permitindo que os usuários personalizem o idioma e as configurações de região conforme sua preferência.  |  MEDÍA |
|RNF-009| Acessibilidade : A aplicação deve ser acessível para pessoas com deficiência, seguindo as diretrizes de acessibilidade da Web e fornecendo recursos como navegação por teclado e leitores de tela.   | ALTA | 
|RNF-010| Backup e Recuperação : A aplicação deve realizar backups regulares dos dados dos usuários e garantir mecanismos eficientes de recuperação em caso de falhas ou perda de dados.  |  ALTA |

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

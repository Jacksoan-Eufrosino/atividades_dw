const botaoDeBusca = document.querySelector('#botaoDeBusca'); // Botão "Pesquisar"
const inputField = document.querySelector('#inputField'); // Campo de entrada
const tableBody = document.querySelector('#tableBody'); // Corpo da tabela onde os dados serão inseridos

// Função para buscar informações do IP
const fetchIPInfo = async (ip) => {
  const apiURL = `https://ipinfo.io/${ip}/json?token=ea38c5437881ca`; // URL da API
  try {
    const response = await fetch(apiURL);
    if (!response.ok) throw new Error('Erro ao buscar dados da API');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    alert('Não foi possível buscar as informações do IP.');
  }
};

// Função para adicionar os dados à tabela
const addRowToTable = (ip, org, country, city) => {
  const newRow = document.createElement('tr');

  // Cria as células
  newRow.innerHTML = `
    <td>${ip}</td>
    <td>${org || 'Desconhecido'}</td>
    <td>${country || 'N/A'}</td>
    <td>${city || 'N/A'}</td>
    <td><a class="delete-button"><i class="fa fa-times" style="font-size: 22px; cursor: pointer;"></i></a></td>
  `;

  // Adiciona evento de exclusão
  newRow.querySelector('.delete-button').addEventListener('click', () => {
    newRow.remove();
  });

  // Adiciona a linha na tabela
  tableBody.appendChild(newRow);
};

// Evento para o botão de pesquisar
botaoDeBusca.addEventListener('click', async (event) => {
  event.preventDefault(); // Evita o recarregamento da página ao clicar no botão

  const ip = inputField.value.trim();
  if (!ip) {
    alert('Por favor, insira um IP.');
    return;
  }

  // Busca os dados do IP
  const ipInfo = await fetchIPInfo(ip);
  if (ipInfo) {
    // Adiciona o IP e os dados na tabela
    const city = ipInfo.city || 'N/A';
    const region = ipInfo.region || 'N/A'; // Caso deseje usar região junto à cidade
    const country = ipInfo.country || 'N/A';
    const org = ipInfo.org || 'Desconhecido';
    addRowToTable(ipInfo.ip, org, country, city);
  }

  // Limpa o campo de entrada
  inputField.value = '';
});
    
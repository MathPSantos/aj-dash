import {
  FiBell,
  FiUser,
  FiList,
  FiArchive,
  FiHeadphones,
  FiDollarSign,
  FiSettings,
  FiRepeat,
  FiPlus,
  FiSearch,
  FiFilter,
  FiRotateCcw,
  FiChevronLeft,
  FiChevronsLeft,
  FiChevronRight,
  FiChevronsRight
} from "react-icons/fi";

export default function App() {
  return (
    <div className="App">
      <div className="sidebar-container">
        <div className="sidebar-content">
          <nav>
            <ul className="sidebar-nav-items">
              <li className="sidebar-nav-item">
                <a href="#">
                  <FiList />
                  <span className="label">Pedidos</span>
                </a>
              </li>
              <li className="sidebar-nav-item">
                <a href="#">
                  <FiArchive />
                  <span className="label">Produtos</span>
                </a>
              </li>
              <li className="sidebar-nav-item">
                <a href="#">
                  <FiHeadphones />
                  <span className="label">SAC</span>
                </a>
              </li>
              <li className="sidebar-nav-item">
                <a href="#">
                  <FiDollarSign />
                  <span className="label">Promoções</span>
                </a>
              </li>
              <li className="sidebar-nav-item">
                <a href="#">
                  <FiSettings />
                  <span className="label">Apoio</span>
                </a>
              </li>
              <li className="sidebar-nav-item">
                <a href="#">
                  <FiRepeat />
                  <span className="label">Processos</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <main className="main-wrapper">
        <header className="page-header-container">
          <div className="page-header-content">
            <ul className="breadcrumb">
              <li>Pedidos</li>
              <li className="active-item">Pesquisa</li>
            </ul>

            <div className="page-header-links-container">
              <button className="icon-button icon-button-secondary">
                <FiBell />
              </button>
              <button className="icon-button icon-button-secondary">
                <FiUser />
              </button>
            </div>
          </div>
        </header>

        <div className="filters-container">
          <div className="filters-content">
            <div className="filters-fields">
              <button className="icon-button icon-button-rounded">
                <FiPlus />
              </button>

              <input type="text" placeholder="N do pedido" className="input" />
              <input
                type="text"
                placeholder="Status do Pedido"
                className="input"
              />
              <input type="text" placeholder="Data" className="input" />
            </div>

            <div className="filters-actions">
              <button className="icon-button">
                <FiSearch />
              </button>
              <button className="icon-button icon-button-secondary">
                <FiFilter />
              </button>
              <button className="icon-button icon-button-secondary">
                <FiRotateCcw />
              </button>
            </div>
          </div>
        </div>

        <div style={{ background: "#fbfcfd" }}>
          <div className="main-header-container">
            <div className="main-header-content">
              <h3>Pedidos</h3>

              <div className="actions">
                <button className="button button-secondary">
                  Exportar CSV
                </button>
                <button className="button button-secondary">
                  Exportar CSV
                </button>
                <button className="button button-secondary">
                  Exportar CSV
                </button>
                <button className="button button-secondary">
                  Exportar CSV
                </button>
                <button className="button button-secondary">
                  Exportar CSV
                </button>
                <button className="button">Mapa</button>
              </div>
            </div>
          </div>

          <div className="main-content">
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th>N Pedido</th>
                    <th>Data do Pedido</th>
                    <th>Total (R$)</th>
                    <th>Transp.</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                    (_, key) => (
                      <tr key={key}>
                        <td>012330123412</td>
                        <td>10/01/2021</td>
                        <td>R$ 1.203,39</td>
                        <td>Loggi</td>
                        <td>Cancelado</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>

            <div className="pagination">
              <div className="controls">
                <button className="icon-button">
                  <FiChevronsLeft />
                </button>
                <button className="icon-button">
                  <FiChevronLeft />
                </button>
              </div>

              <div className="center-controls">
                <span>
                  Página <b>1</b> de <b>20</b>
                </span>
                <span>Ir para página:</span>
                <span>
                  Total: <b>200</b> itens
                </span>
              </div>

              <div className="controls">
                <button className="icon-button">
                  <FiChevronRight />
                </button>
                <button className="icon-button">
                  <FiChevronsRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

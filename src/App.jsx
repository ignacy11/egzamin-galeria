import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {
    const dane = [
        {id: 1, alt: "Auto Czerwone", filename: "src/assets/auto_czerwone.jpg", category: 3, downloads: 32},
        {id: 2, alt: "Maluch", filename: "src/assets/auto_maluch.jpg", category: 3, downloads: 45},
        {id: 3, alt: "Auto Stare", filename: "src/assets/auto_stare.jpg", category: 3, downloads: 22},
        {id: 4, alt: "Auto Terenowe", filename: "src/assets/autoterenowe.jpg", category: 3, downloads: 10},
        {id: 5, alt: "Lis", filename: "src/assets/lis.jpg", category: 2, downloads: 102},
        {id: 6, alt: "Mercedes", filename: "src/assets/merc.jpg", category: 3, downloads: 76},
        {id: 7, alt: "Orchidea", filename: "src/assets/orchidea.jpg", category: 1, downloads: 762},
        {id: 8, alt: "Podhjalan", filename: "src/assets/podhjalan.jpg", category: 2, downloads: 98},
        {id: 9, alt: "Ptaszek", filename: "src/assets/ptaszek.jpg", category: 2, downloads: 6767},
        {id: 10, alt: "Rogaty", filename: "src/assets/rogaty.jpg", category: 2, downloads: 312},
        {id: 11, alt: "Róża", filename: "src/assets/roza.jpg", category: 1, downloads: 731},
        {id: 12, alt: "Toster", filename: "src/assets/tesla.jpg", category: 3, downloads: 12},
        {id: 13, alt: "Słonecznik", filename: "src/assets/slonecznik.jpg", category: 1, downloads: 632},
        {id: 14, alt: "Tulipan", filename: "src/assets/tulipan.jpg", category: 1, downloads: 5432},
    ]

    function filterGallery() {
        // TODO
    }

    return (
        <>
            <header>
                <h1>Kategorie zdjęć</h1>
                <section className={"switches"}>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="ctrId" onClick={filterGallery}/>
                        <label className="form-check-label" htmlFor="ctrId">Kwiaty</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="ctrId2"/>
                        <label className="form-check-label" htmlFor="ctrId2">Zwierzęta</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="ctrId3"/>
                        <label className="form-check-label" htmlFor="ctrId3">Samochody</label>
                    </div>
                </section>
            </header>
            <main>
                <section className={"gallery"}>
                    {
                        dane.map(entry =>
                            <section className={"gallery-tile"}>
                                <img className={"gallery-image"} src={entry.filename} alt={entry.alt}/>
                                <section className={"gallery-tile-info-section"}>
                                    <span className={"gallery-tile-download-count"}>{"Pobrań: " + entry.downloads}</span>
                                    <button className={"gallery-tile-download-button"}>Pobierz</button>
                                </section>
                            </section>
                        )
                    }
                </section>
            </main>
        </>
    )
}
export default App

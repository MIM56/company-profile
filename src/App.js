import ParticlesBg from "particles-bg";
import './App.css';

function App() {
    return (
        <div>
            <div className="card">
                <div className="card_body">
                    <div className="profile text-center">
                      <img src="foto irfan 4.png" className="avatar"/>
                      <div className="bg_content rd_12 p_8">
                            <h1>Mohamad Irfan Maulana</h1>
                            <p>Company Profile</p>
                        </div>
                   </div>
                   <div className="mt-16">
                      <a className="btn_action bg_content" href="https://mim56.github.io/Portfolio/">
                        <span>Github</span>
                      </a>
                   </div>
                </div>
            </div>
            <ParticlesBg type="thick" bg={true} />
        </div> 
    );
}

export default App;

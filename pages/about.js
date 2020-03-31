import Layout from '../components/ProkinoLayout';

export default function About() {
  return (
    <Layout>
<div className="container">

<div className="row">
      <div className="media-container-row mt-5">
          <div className="title col-12 col-md-12">
            <h3 className="display-5">About Us</h3>
            <hr />
            <p>
              ProKinO is a collaborative effort between the Evolutionary Systems Biology Group Lab of Dr. Natarajan Kannan at the Biochemistry and Molecular Biology Department and Dr. Krys J. Kochut's lab at the Computer Science Department, both at University of Georgia, Athens, USA. Gurinder Gosal, also at UGA, created the software system to automatically populate ProKinO from the selected data sources. 
            </p>
            <br />
            <h3 className="display-5">Meet The Team</h3>
            <hr />         
          </div>
      </div>
    </div>
    <div className="row">
       {/* Team Member 1 */}
      <div className="col">
        <div className="card border-0 shadow">
          <img src="img/people/NatarajanKannan.jpg" className="card-img-top" alt="..." />
          <div className="card-body text-center">
            <h6 className="card-title mb-0">Natarajan Kannan</h6>
            <div className="card-text text-black-50">PI <br /> BioInformatics</div>
          </div>
        </div>
      </div>
      {/* Team Member 2 */}
      <div className="col">
        <div className="card border-0 shadow">
          <img src="img/people/KrzysztofKochut.jpg" className="card-img-top" alt="..." />
          <div className="card-body text-center">
            <h6 className="card-title mb-0">Krzysztof Kochut</h6>
            <div className="card-text text-black-50">Co-PI  <br /> Computer Science</div>
          </div>
        </div>
      </div>
      {/* Team Member 3 */}
      <div className="col">
        <div className="card border-0 shadow">
          <img src="img/people/LiangChinHuang.jpg" className="card-img-top" alt="..." />
          <div className="card-body text-center">
            <h6 className="card-title mb-0">Liang-Chin Huang</h6>
            <div className="card-text text-black-50">Researcher <br /> BioInformatics</div>
          </div>
        </div>
      </div>
      {/* Team Member 4 */}
      <div className="col">
        <div className="card border-0 shadow">
          <img src="img/people/AbbasKeshavarzi.jpg" className="card-img-top" alt="..." />
          <div className="card-body text-center">
            <h6 className="card-title mb-0">Abbas Keshavarzi</h6>
            <div className="card-text text-black-50">Researcher <br /> Computer Science</div>
          </div>
        </div>
      </div>

        {/* Team Member 5 */}
      <div className="col">
        <div className="card border-0 shadow">
          <img src="img/people/SaberSoleymani.jpg" className="card-img-top" alt="..." />
          <div className="card-body text-center">
            <h6 className="card-title mb-0">Saber Soleymani</h6>
            <div className="card-text text-black-50">Researcher <br /> Computer Science</div>
          </div>
        </div>
      </div>
    </div>
  <br />
  </div>
    </Layout>
  );
}
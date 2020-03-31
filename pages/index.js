import Layout from '../components/ProkinoLayout';

export default function Index() {
  return (
    <Layout>
      <div className="container">

{/* Heading Row */}
<div className="row align-items-top my-5">
  <div className="col-lg-7">
    <img className="img-fluid rounded mb-4 mb-lg-0" src="img/bg.png" alt="prokino first page image" />
  </div>
  {/* /.col-lg-8 */}
  <div className="col-lg-5">
    <h1 className="font-weight-light" style={{marginTop:'-5px'}}>ProKinO: Protein Kinase Ontology</h1>
    <p>
      The ProKinO is a protein kinase-specific ontology, which provides a controlled vocabulary of terms, their hierarchy, and relationships unifying sequence, structure, function, mutation and pathway information on kinases. The conceptual representation of such diverse information in one place enables not only rapid discovery of significant information related to a specific protein kinase, but also enables large scale integrative analysis of the protein kinase family.
    </p>
    {/* <a className="btn btn-primary" href="#">Download</a> */}
  </div>
  {/* /.col-md-4 */}
</div>
{/* /.row */}

{/* Call to Action Well */}
<div className="card text-white bg-secondary my-5 py-4 text-center">
  <div className="card-body">
    <p className="text-white m-0">The overall goal of this project is to generate and experimentally test models of understudied “dark” kinase evolution and function, and to develop a data-analytics framework for hypothesis generation and testing on the dark kinome. </p>
  </div>
</div>

{/* Content Row */}
<div className="row">
  <div className="col-md-4 mb-5">
    <div className="card h-100">
      <div className="card-body">
        <h2 className="card-title">ProKinO Browser</h2>
        <p className="card-text">
          You can use this ontology browser to quickly locate protein kinase genes and a lot of information related to the genes, including the sequence, structure, function, mutation and pathway information on kinases.</p>
      </div>
      <div className="card-footer">
        <a href="browser" className="btn btn-primary btn-sm">Launch</a>
      </div>
    </div>
  </div>
  {/* /.col-md-4 */}
  <div className="col-md-4 mb-5">
    <div className="card h-100">
      <div className="card-body">
        <h2 className="card-title">KinView</h2>
        <p className="card-text">The Kinome Viewer (KinView) can be used as a comparative tool to identify differences and similarities in natural variation, cancer variants and post-translational modifications between kinase groups, families and subfamilies. </p>
      </div>
      <div className="card-footer">
        <a href="https://prokino.github.io/kinview" className="btn btn-primary btn-sm">Launch (beta)</a>
      </div>
    </div>
  </div>
  {/* /.col-md-4 */}
  <div className="col-md-4 mb-5">
    <div className="card h-100">
      <div className="card-body">
        <h2 className="card-title">Downloads</h2>
        <p className="card-text">To download a version of the ontology, or an offline version of the KinView, you can visit the Downloads page.</p>
      </div>
      <div className="card-footer">
        <a href="downloads" className="btn btn-primary btn-sm">Launch</a>
      </div>
    </div>
  </div>
  {/* /.col-md-4 */}

</div>
{/* /.row */}

</div>
    </Layout>
  );
}
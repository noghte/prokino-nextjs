import Layout from '../components/ProkinoLayout';
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'
import useSWR, {SWRConfig} from 'swr'
// import Cors from 'micro-cors';
// const cors = Cors({ allowMethods: ["GET", "HEAD"] });

// import { useProtein } from '../services/proteins';
const fetcher = (...args) => fetch(...args).then(res => res.json())
export default function Protein() { //{protein}
const router = useRouter()
    return (<SWRConfig>
        <ProteinTemplate protein={router.query["p"]} />
    </SWRConfig>);
}

function ProteinTemplate({protein})
{
    if (!protein)
        return <></>;
    let url = `http://gumbo.cs.uga.edu:8080/prokinosrv/rest/entity/${protein}`
    const { data, error } = useSWR(url, fetcher);
    // console.log(data,error);
    if (error) {
        return <Layout>Failed to load</Layout>
    }
    if (!data) {
        return <Layout>Loading...</Layout>
    }

    let dataProps = {};
    data.datatypeProperties.forEach(prop=>
        dataProps[prop["p"]] = prop["v"]
        );

    let objProps = {};
    data.objectProperties.forEach(prop=>
        objProps[prop["p"]] = prop["v"]
        );

    let incomingProps={}
    data.incomingObjectProperties.forEach(prop=>
        incomingProps[prop["p"]] = prop["v"]
        );

    console.log(dataProps,objProps,incomingProps);
    
    
    return <DisplayProtein 
                localName={data.localName.split(":")[1]} 
                datatypeProperties={dataProps} 
                objectProperties={objProps}
                incomingObjectProperties={incomingProps}
                />;
}
function DisplayProtein({localName,datatypeProperties,objectProperties,incomingObjectProperties})
{
    return (<Layout>
        <div id="fav-container" className="fav-container">
        {/* remove if do not need margins  */}
            <div className="favth-container"> 
                <div className="favth-row">
                    <div className="favth-col-xs-12">
                        <h3 className="details-title">
                            Protein: {localName}
                        </h3>
                       
                        <div className="favth-clearfix">
								<div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Primary Name</span></div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                                {datatypeProperties["prokino:hasPrimaryName"]}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Full Name</span></div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                            {datatypeProperties["prokino:hasFullName"]}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Protein Name</span></div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                            {datatypeProperties["prokino:hasProteinName"]}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>UniProt Name</span></div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                            {datatypeProperties["prokino:hasUniprotPrimaryName"]}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Other Names</span></div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                                {datatypeProperties["prokino:hasOtherName"].join(", ")}
                                             </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Cellular Location</span></div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                            {datatypeProperties["prokino:hasCellularLocation"].join(", ")}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Tissue Specificity</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                            {datatypeProperties["prokino:hasTissueSpecificity"]}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Chromosomal Position</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                            {datatypeProperties["prokino:chromosomalPosition"]}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Description</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                            {datatypeProperties["rdfs:comment"]}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Present In</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                                <a href="http://vulcan.cs.uga.edu/prokino/resource/Human" target="_blank" title="show Human" >Human</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Also Present In</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                                <a href="http://vulcan.cs.uga.edu/prokino/resource/FruitFly_EGFR" target="_blank" title="show FruitFly_EGFR" >FruitFly</a>,
                                                <a href="http://vulcan.cs.uga.edu/prokino/resource/SeaUrchin_EGFR" target="_blank" title="show SeaUrchin_EGFR" >SeaUrchin</a>,
                                                <a href="http://vulcan.cs.uga.edu/prokino/resource/Mouse_EGFR" target="_blank" title="show Mouse_EGFR" >Mouse</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Classification</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                                <a href="http://vulcan.cs.uga.edu/prokino/resource/FruitFly_EGFR" target="_blank" title="show EGFR family" >EGFR family</a>,
                                                <a href="http://vulcan.cs.uga.edu/prokino/resource/SeaUrchin_EGFR" target="_blank" title="show TK group" >TK group</a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Encodes Domains</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                                <a href="http://vulcan.cs.uga.edu/prokino/resource/Human" target="_blank" title="show Human_EGFR-Domain" >Human_EGFR-Domain</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Functional Domains</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                                <a href="http://vulcan.cs.uga.edu/prokino/resource/Human" target="_blank" title="show Furin-like" >Furin-like</a>,
                                                <a href="http://vulcan.cs.uga.edu/prokino/resource/Human" target="_blank" title="show GF_recep_IV" >GF_recep_IV</a>,
                                                <a href="http://vulcan.cs.uga.edu/prokino/resource/Human" target="_blank" title="show Pkinase_Tyr" >Pkinase_Tyr</a>,
                                                <a href="http://vulcan.cs.uga.edu/prokino/resource/Human" target="_blank" title="show Recep_L_domain" >Recep_L_domain</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Sequence</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                                <a href="http://vulcan.cs.uga.edu/prokino/resource/Human" target="_blank" title="show Furin-like" >Human_EGFR-Cosmic_Seq</a>,
                                                <a href="http://vulcan.cs.uga.edu/prokino/resource/Human" target="_blank" title="show Furin-like" > Human_EGFR-Isoform1_Seq</a>,
                                                <a href="http://vulcan.cs.uga.edu/prokino/resource/Human" target="_blank" title="show Furin-like" > Human_EGFR-Isoform2_Seq</a>,
                                                <a href="http://vulcan.cs.uga.edu/prokino/resource/Human" target="_blank" title="show Furin-like" > Human_EGFR-Isoform3_Seq</a>,
                                                <a href="http://vulcan.cs.uga.edu/prokino/resource/Human" target="_blank" title="show Furin-like" > Human_EGFR-Isoform4_Seq</a>,
                                                <a href="http://vulcan.cs.uga.edu/prokino/resource/Human" target="_blank" title="show Furin-like" > Human_EGFR-Kinbase_Seq</a>,
                                                <a href="http://vulcan.cs.uga.edu/prokino/resource/Human" target="_blank" title="show Furin-like" > Human_EGFR-UniProt_Seq</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Associated w/ Diseases</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                                <a href="https://www.rcsb.org/structure/42deyRJ8" target="_blank" title="show Associated Diseases"> Ewings_sarcoma-peripheral_primitive_neuroectodermal_tumour_NS</a>,
                                                <a href="https://www.rcsb.org/structure/42deyRJ8" target="_blank" title="show Associated Diseases"> NS_NS</a>,
                                                <a href="https://www.rcsb.org/structure/42deyRJ8" target="_blank" title="show Associated Diseases"> Wilms_tumour_NS</a>,
                                                <a href="https://www.rcsb.org/structure/42deyRJ8" target="_blank" title="show Associated Diseases"> adenoma_NS</a>,
                                                <a href="https://www.rcsb.org/structure/42deyRJ8" target="_blank" title="show Associated Diseases"> adenoma_tubular</a>,
                                                <a href="https://www.rcsb.org/structure/42deyRJ8" target="_blank" title="show Associated Diseases"> adnexal_tumour_malignant_adnexal_tumour</a>,
                                                <a href="https://www.rcsb.org/structure/42deyRJ8" target="_blank" title="show Associated Diseases"> adnexal_tumour_other</a>,
                                                <a href="https://www.rcsb.org/structure/42deyRJ8" target="_blank" title="show Associated Diseases"> adnexal_tumour_sebaceous_adenoma</a>,
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>


                        <div className="favth-clearfix">
                            <fieldset className="fieldset-details">
                                <legend>Mutations</legend>

                                <h5 className="details-title">
                                    Substitutions
                                </h5>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Missense</span></div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.R2Q</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.G5A</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.A13T</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.A16T</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.A17V</a>,
                                                

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Coding Silent</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.P20=</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.A21=</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.Q40=</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.V60=</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.V85=</a>,
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Nonsense</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.Q71*</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.W200*</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.Q208*</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.Q276*</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.C307*</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.E1193*</a>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h5 className="details-title">
                                    Insertions
                                </h5>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Insertion in Frame</span></div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.768_770insRCD</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.A763_Y764insFQEA</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.A763_Y764insFQEA</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.Y764_V765insHH</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Insertion Frameshift</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.A202Cfs*29</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.A859Gfs*38</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.D770Efs*61</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.I715Dfs*14</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.Q820Sfs*7</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.R224Pfs*7</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.S720Afs*29</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.W817*</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.Y801*</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h5 className="details-title">
                                    Deletions
                                </h5>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Deletion in Frame</span></div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.729_761del?</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.A750_E758del</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.A750_E758del</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.A750_K757del</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.Y827_R832del</a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Deletion Frameshift</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.A647Hfs*64</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.Y69Mfs*11</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <h5 className="details-title">
                                    Complex Mutations
                                </h5>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Complex Insertion in Frame</span></div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.747_752>S</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.V774>HC</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Complex Deletion in Frame</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.A859_L883>V</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.V30_R297>G</a>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Complex Frameshift</span></div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.D770Pfs*59</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.E746Nfs*15</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.L747Rfs*13</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.Q32Hfs*46</a>,
                                                <a href="https://www.rcsb.org/structure/42eyRJ8" target="_blank" title="show"> p.T751Sfs*4</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Compound Substitution</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h5 className="details-title">
                                    Fusions
                                </h5>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Fusion</span></div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h5 className="details-title">
                                    Other Mutations
                                </h5>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Other Mutation</span></div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>

                                                <a href="https://www.rcsb.org/structure/4d2RJ8" target="_blank" title="show">p.L747Xfs*16</a>,
                                                <a href="https://www.rcsb.org/structure/42dRJ8" target="_blank" title="show"> p.G719Xfs*29</a>,
                                                <a href="https://www.rcsb.org/structure/42dRJ8" target="_blank" title="show"> p.K806fs*?</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </fieldset>
                        </div>

                                                        
                        <div className="favth-clearfix">
                            <fieldset className="fieldset-details">
                                <legend>Pathways</legend>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Participates in Pathways</span></div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                                <a href="https://www.rcsb.org/structure/42yRJ8" target="_blank" title="show">Cargo recognition for clathrin-mediated endocytosis</a><br />
                                                <a href="https://www.rcsb.org/structure/42yRJ8" target="_blank" title="show">Transcriptional regulation by the AP-2 (TFAP2) family of transcription factors</a><br />
                                                <a href="https://www.rcsb.org/structure/42yRJ8" target="_blank" title="show">Vesicle-mediated transport</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Participates in Reactions</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                                        <a href="https://www.rcsb.org/structure/42yRJ8" target="_blank" title="show">Activated ERBB2 binds PTK6 (BRK)</a><br />
                                                        <a href="https://www.rcsb.org/structure/42yRJ8" target="_blank" title="show">Ubiquitination of stimulated EGFR (CBL)</a><br />
                                                        <a href="https://www.rcsb.org/structure/42yRJ8" target="_blank" title="show">Ubiquitination of stimulated EGFR (CBL:GRB2)</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Element of</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                                <a href="https://www.rcsb.org/structure/42yRJ8" target="_blank" title="show">Activator:PI3K [plasma membrane]</a><br />
                                                <a href="https://www.rcsb.org/structure/42yRJ8" target="_blank" title="show">Active dimers of ligand-responsive EGFR mutants sensitive to non-covalent TKIs [plasma membrane]</a><br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Other Mutation</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                                <a href="https://www.rcsb.org/structure/4d2RJ8" target="_blank" title="show">p.L747Xfs*16</a>,
                                                <a href="https://www.rcsb.org/structure/42dRJ8" target="_blank" title="show"> p.G719Xfs*29</a>,
                                                <a href="https://www.rcsb.org/structure/42dRJ8" target="_blank" title="show"> p.K806fs*?</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>

														<div className="favth-clearfix">
                                                            <fieldset className="fieldset-details">
                                                                <legend>References</legend>
                                                                <div className="fieldset-pair-container">
                                                                    <div className="favth-clearfix">
                                                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Other Mutation</span></div>
                                                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                                                            <div>
                                                                               <a href="https://www.rcsb.org/structure/4d2RJ8" target="_blank" title="show">p.L747Xfs*16</a>,
																				<a href="https://www.rcsb.org/structure/42dRJ8" target="_blank" title="show"> p.G719Xfs*29</a>,
																				<a href="https://www.rcsb.org/structure/42dRJ8" target="_blank" title="show"> p.K806fs*?</a> 
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="fieldset-pair-container">
                                                                    <div className="favth-clearfix">
                                                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">PubMed Refs</div>
                                                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                                                            <div>
                                                                                <a href="https://www.rcsb.org/structure/42RJ8" target="_blank" title="show"> 10026169 </a>,
                                                                                <a href="https://www.rcsb.org/structure/42RJ8" target="_blank" title="show"> 10228163 </a>,
                                                                                <a href="https://www.rcsb.org/structure/42RJ8" target="_blank" title="show"> 10523301 </a>,
                                                                                <a href="https://www.rcsb.org/structure/42RJ8" target="_blank" title="show"> 9852145 </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="fieldset-pair-container">
                                                                    <div className="favth-clearfix">
                                                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">UniProt Refs</div>
                                                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                                                            <div>
                                                                                <a href="https://www.rcsb.org/structure/4RJ8s" target="_blank" title="show PDB:4RJ8">O00688</a>,
                                                                                <a href="https://www.rcsb.org/structure/4RJ83" target="_blank" title="show PDB:4RJ8"> O00732</a>,
                                                                                <a href="https://www.rcsb.org/structure/4RJ83" target="_blank" title="show PDB:4RJ8"> Q9UMG5</a>
 																			</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="fieldset-pair-container">
                                                                    <div className="favth-clearfix">
                                                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Wikipedia Refs</div>
                                                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                                                            <div>
                                                                                <a href="http://en.wikipedia.org/wiki/https://en.wikipedia.org/wiki/Epidermal_growth_factor_receptor" target="_blank" title="show Wikipedia Refs" >1013</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="fieldset-pair-container">
                                                                    <div className="favth-clearfix">
                                                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">PubMed preview</div>
                                                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                                                            <div>
                                                                            Preview
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                
                                                            </fieldset>
                                                        </div>
                                                    </div>
                                </div>
                            </div>
                </div>
    
            </Layout>
            );
}
//export default Test;

// export async function getServerSideProps() {
//     // Call an external API endpoint to get posts.

//     const res = await fetch(`http://gumbo.cs.uga.edu:8080/prokinosrv/rest/entity/${p}`)
//     const data = await res.json()
  
//     // By returning { props: posts }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//         props: {
//             protein : data, 
//       },
//     }
//   }
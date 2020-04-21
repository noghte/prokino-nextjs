import Layout from '../components/ProkinoLayout';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import useSWR, {SWRConfig} from 'swr';
import Link from 'next/link';

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
function showList(items, seperator = ", ")
{
    if (items)
        return items.join(seperator);
    return "";
}
function LinkList({values, targetvalue, seperator = ", "})
{
    let links = []
    console.log(targetvalue);
    if (values)
        {
            //we should have a target value to get filtered values, if not, consider the first element as the main element
            let entity = targetvalue ? values.find(el => el["c"] === targetvalue) : values[0];
            
            if (entity) 
            {
                const length = entity["v"].length;
                for (let i=0;i<length;i++) //loop through pairs of values
                {
                    let isLabel = i % 2 == 1; //odd literals are labels, and even literals are link values (for href attribtue)
                    if (isLabel)
                    {
                        const label = entity["v"][i];
                        const link = entity["v"][i-1];
                        links.push(
                            <Link key={i} href={'protein?p=' + link}>
                                <a>{label}</a>
                            </Link>
                        );
                        if (i<length-1) //if it is not the last item (don't add separator to the last item)
                            links.push(seperator); // add a seperator (e.g. a comma) to seprate list of links
                    }
                }
            }
        }
    return links;
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
    if (data.datatypeProperties)
        data.datatypeProperties.forEach(prop=>
            dataProps[prop["p"]] = prop["v"]
            );

    let objProps = {};
    if (data.objectProperties)
        data.objectProperties.forEach(prop=>
            objProps[prop["p"]] = prop["v"]
            );

    let incomingProps={}
    if (data.incomingObjectProperties)
        data.incomingObjectProperties.forEach(prop=>
            incomingProps[prop["p"]] = prop["v"]
            );

    console.log("dataProps", dataProps,"objProps",objProps,"incomingProps",incomingProps);
    
    return <DisplayProtein 
                localName={data.localName.split(":")[1]} 
                datatypeProperties={dataProps} 
                objectProperties={objProps}
                incomingObjectProperties={incomingProps}
                />;
}
function DisplayProtein({localName, datatypeProperties,objectProperties,incomingObjectProperties})
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
                                                {showList(datatypeProperties["prokino:hasOtherName"])}
                                             </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Cellular Location</span></div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                            {showList(datatypeProperties["prokino:hasCellularLocation"])}
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
                                                <LinkList values={objectProperties["prokino:presentIn"]} targetvalue="prokino:Organism" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Also Present In</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div style={{"backgroundColor":"pink"}}>
                                                ?
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Classification</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                        <div style={{"backgroundColor":"pink"}}>
                                                ?

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Encodes Domains</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                        <div>
                                        <LinkList values={incomingObjectProperties["prokino:encodedIn"]} />
                                        
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Functional Domains</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                            <LinkList values={objectProperties["prokino:hasFunctionalDomain"]} />
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Sequence</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                            <LinkList values={objectProperties["prokino:hasSequence"]} />
                                            
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Associated w/ Diseases</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                            <LinkList values={objectProperties["prokino:associatedWith"]} />
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
                                                <LinkList values={objectProperties["prokino:hasMutation"]} targetvalue={"prokino:Missense"} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Coding Silent</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                            <LinkList values={objectProperties["prokino:hasMutation"]} targetvalue={"prokino:CodingSilent"} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Nonsense</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                            <LinkList values={objectProperties["prokino:hasMutation"]} targetvalue="prokino:Nonsense" />
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
                                            <LinkList values={objectProperties["prokino:hasMutation"]} targetvalue="prokino:InsertionInframe" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Insertion Frameshift</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                            <LinkList values={objectProperties["prokino:hasMutation"]} targetvalue="prokino:InsertionFrameshift" />
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
                                                <LinkList values={objectProperties["prokino:hasMutation"]} targetvalue="prokino:DeletionInframe" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Deletion Frameshift</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                                <LinkList values={objectProperties["prokino:hasMutation"]} targetvalue="prokino:DeletionFrameshift" />
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
                                                <LinkList values={objectProperties["prokino:hasMutation"]} targetvalue="prokino:ComplexInsertionInframe" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Complex Deletion in Frame</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                            <LinkList values={objectProperties["prokino:hasMutation"]} targetvalue="prokino:ComplexDeletionInframe" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label"><span>Complex Frameshift</span></div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                            <div>
                                                <LinkList values={objectProperties["prokino:hasMutation"]} targetvalue="prokino:ComplexFrameshift" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Compound Substitution</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                        <div style={{"backgroundColor":"pink"}}>
                                                ?
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
                                        <div style={{"backgroundColor":"pink"}}>
                                                ?
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
                                            <LinkList values={objectProperties["prokino:hasMutation"]} targetvalue="prokino:OtherMutation" />
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
                                            <LinkList values={objectProperties["prokino:participatesIn"]} targetvalue="prokino:Pathway" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Participates in Reactions</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                        <div style={{"backgroundColor":"pink"}}>
                {/* seperator br */} ?
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fieldset-pair-container">
                                    <div className="favth-clearfix">
                                        <div className="favth-col-lg-2 favth-col-md-2 favth-col-sm-3 favth-col-xs-12 details-label">Element of</div>
                                        <div className="favth-col-lg-10 favth-col-md-10 favth-col-sm-9 favth-col-xs-12 details-field">
                                        <div style={{"backgroundColor":"pink"}}>
                                    {/* seperator br */} ?
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
                                                            <fieldset className="fieldset-details" style={{"backgroundColor":"pink"}}>
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
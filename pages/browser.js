import Layout from '../components/ProkinoLayout';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

export default function Browser() {
    const ExpansionPanel = withStyles({
        root: {
          border: '1px solid rgba(0, 0, 0, .125)',
          boxShadow: 'none',
          '&:not(:last-child)': {
            borderBottom: 0,
          },
          '&:before': {
            display: 'none',
          },
          '&$expanded': {
            margin: 'auto',
          },
        },
        expanded: {},
      })(MuiExpansionPanel);
      
      const ExpansionPanelSummary = withStyles({
        root: {
          backgroundColor: 'rgba(0, 0, 0, .03)',
          borderBottom: '1px solid rgba(0, 0, 0, .125)',
          marginBottom: -1,
          minHeight: 56,
          '&$expanded': {
            minHeight: 56,
          },
        },
        content: {
          '&$expanded': {
            margin: '12px 0',
          },
        },
        expanded: {},
      })(MuiExpansionPanelSummary);
      
      const ExpansionPanelDetails = withStyles(theme => ({
        root: {
          padding: theme.spacing(2),
        },
      }))(MuiExpansionPanelDetails);
      
        const [expanded, setExpanded] = React.useState('panel1');
      
        const handleChange = panel => (event, newExpanded) => {
          setExpanded(newExpanded ? panel : false);
        };
    return(
        <Layout>
            <br />
            <br />
            <div className="container mbr-black">
          <div className="row justify-content-center">
            <div className="box-item col-md-4">
                <div className="icon-block-top pb-4 align-center">
                  <svg height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 17c-.13.004-.253.058-.344.15L.64 26.652c-.896.893-.776 2.134-.105 2.81.67.674 1.913.795 2.81-.103l9.49-9.49c.492-.472-.25-1.182-.706-.708l-9.49 9.49c-.58.58-1.07.43-1.396.104-.326-.328-.47-.826.102-1.397l9.517-9.503c.326-.318.084-.857-.363-.857zm8.45-14.93c-1.604.213-3.146.91-4.39 2.063-.49.453.21 1.17.68.734 2.18-2.02 5.392-2.445 8.022-1.06.58.332 1.053-.603.465-.885-1.5-.79-3.17-1.064-4.776-.852zM20 0c-5.517 0-10 4.483-10 10s4.483 10 10 10 10-4.483 10-10S25.517 0 20 0zm0 1c4.976 0 9 4.024 9 9s-4.024 9-9 9-9-4.024-9-9 4.024-9 9-9z"/></svg>
                </div>
            <h4 className="box-item-title pb-3 mbr-fonts-style align-center display-5">Quick Search</h4>
            <p className="box-item-text mbr-fonts-style align-center display-7">Search into pre-defined collections of proteins, genes, and interactions. </p>
          </div>
          <div className="box-item col-md-4">
              <div className="icon-block-top pb-4 align-center">
                <svg height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M19.498 7c-.182 0-.35.1-.437.26l-8.987 15.988c-.328.58.542 1.072.87.492L19.93 7.75c.196-.332-.045-.75-.432-.75zm3.03 2c.112.006.22.05.304.125l6.994 5.996c.232.2.232.56 0 .76l-6.994 5.995c-.48.43-1.14-.352-.652-.757l6.554-5.618-6.554-5.618c-.368-.308-.132-.882.348-.882zM7.472 9c-.112.006-.22.05-.304.125L.174 15.12c-.232.2-.232.56 0 .76l6.994 5.995c.48.43 1.14-.352.652-.757L1.266 15.5 7.82 9.882C8.188 9.574 7.952 9 7.472 9z"/></svg>
              </div>
              <h4 className="box-item-title pb-3 mbr-fonts-style align-center display-5">Advanced Queries</h4>
              <p className="box-item-text mbr-fonts-style align-center display-7">Build your own SPARQL queries based on examples, or from scratch.</p>
          </div>
          <div className="box-item col-md-4">
            <div className="icon-block-top pb-4 align-center">
                
            <svg height="30" viewBox="0 0 30 30" width="80" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0C.678 0 0 .678 0 1.5v25c0 .822.678 1.5 1.5 1.5H3v.5c0 .822.678 1.5 1.5 1.5h2c.822 0 1.5-.678 1.5-1.5V28h14v.5c0 .822.678 1.5 1.5 1.5h2c.822 0 1.5-.678 1.5-1.5V28h1.5c.822 0 1.5-.678 1.5-1.5v-25c0-.822-.678-1.5-1.5-1.5h-27zm0 1h27c.286 0 .5.214.5.5v25c0 .286-.214.5-.5.5h-27c-.286 0-.5-.214-.5-.5v-25c0-.286.214-.5.5-.5zM5 4c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm4 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm4 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM3.5 9c-.277 0-.5.223-.5.5s.223.5.5.5h23c.277 0 .5-.223.5-.5s-.223-.5-.5-.5h-23zM9 13c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm4 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm4 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM3.5 18c-.277 0-.5.223-.5.5s.223.5.5.5h23c.277 0 .5-.223.5-.5s-.223-.5-.5-.5h-23zM5 22c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm4 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm4 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm-9 6h3v.5c0 .286-.214.5-.5.5h-2c-.286 0-.5-.214-.5-.5V28zm19 0h3v.5c0 .286-.214.5-.5.5h-2c-.286 0-.5-.214-.5-.5V28z"/></svg>
            </div>
            <h4 className="box-item-title pb-3 mbr-fonts-style align-center display-5">Browse</h4>
            <p className="box-item-text mbr-fonts-style align-center display-7">Locate kinase proteins and other information related to the proteins.</p>
        </div>
  </div>
  </div>

  	<div className="row justify-content-center">
      <div className="col-12 col-md-10 col-lg-8">
          <form>
            <br />
            <h4 className="align-center display-2">
              Look into classes, genes, diseases, or pathways:
            </h4>
              <div className="card-body row searchbox align-items-center">
                  <div className="col-auto">
                      <i className="fas fa-search h4 text-body"></i>
                  </div>
                  {/* end of col */}
                  <div className="col">
                      <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search" />
                  </div>
                  {/* end of col */}
                  <div className="col-auto">
                    <select className="form-control form-control-lg" id="sel1">
                      <option>All Classes</option>
                      <option>Genes</option>
                      <option>Diseases</option>
                      <option>Pathways</option>
                    </select>
                  </div>
                  <div className="col-auto">
                      <button className="btn btn-lg btn-success" type="submit">Search</button>
                  </div>
                  {/* end of col */}
              </div>
          </form>
      </div>
      {/* end of col */}
  </div>
    {/* /.row */}
  <br />
  <div className="container position-relative" id="content">
  
</div>
    <div className="container position-relative" id="content">
        <div className="row h-100 mt-5">
            <aside className="col-md-3 bg-light" id="left">
                <div className="mt-5 mb-3 sticky-top" id="side">
                    <ul className="nav flex-md-column flex-row justify-content-between" id="sidenav">
                        <li className="nav-item"><a href="#generalinfo" className="nav-link active pl-0">General Information</a></li>
                        <li className="nav-item"><a href="#pathways" className="nav-link pl-0">Pathways</a></li>
                        <li className="nav-item">
                            <a href="#mutations" className="nav-link pl-0">Mutations</a>
                            <ul className="nav flex-md-column ml-2">
                                <li className="nav-item"><a href="#mutations_sub" className="nav-link">Substitutions</a></li>
                                <li className="nav-item"><a href="#mutations_ins" className="nav-link">Insertions</a></li>
                                <li className="nav-item"><a href="#mutations_del" className="nav-link">Deletions</a></li>
                                <li className="nav-item"><a href="#mutations_complex" className="nav-link">Complex Mutations</a></li>
                                <li className="nav-item"><a href="#mutations_fusions" className="nav-link">Fusions</a></li>
                                <li className="nav-item"><a href="#mutations_other" className="nav-link">Other Mutations</a></li>

                                
                            </ul>
                        </li>
                        <li className="nav-item"><a href="#references" className="nav-link pl-0">References</a>
                          <ul className="nav flex-md-column ml-2">
                            <li className="nav-item"><a href="#references_pubmed" className="nav-link">PubMed</a></li>
                            <li className="nav-item"><a href="#references_uniprot" className="nav-link">UniProt</a></li>
                            <li className="nav-item"><a href="#references_wiki" className="nav-link">Wikipedia</a></li>
                        </ul>
                        </li>
                        
                        
                    </ul>
                </div>
            </aside>
            <main className="col py-5">
                <div className="row position-relative">
                    <div className="col">
                    <h2 className="mb-3">EGFR</h2>
                    <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>General Information</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Typography>
     

            <div className="anchor" id="generalinfo"></div>
            <h5>General Information</h5>
            <p>Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code editing brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag wolf squid tote bag.
                Tote bag cronut semiotics, raw denim deep v taxidermy messenger bag. Tofu YOLO Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick artisan
                cliche semiotics ugh synth chillwave meditation. Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY 90's blog.</p>

            <p>Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free Kickstarter artisan Wes Anderson wolf pug. Godard sustainable you probably haven't heard of them, vegan farm-to-table Williamsburg
                slow-carb readymade disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi
                McSweeney's Shoreditch selfies, forage fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.</p>

            <p>Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code editing brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag wolf squid tote bag.
                Tote bag cronut semiotics, raw denim deep v taxidermy messenger bag. Tofu YOLO Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick artisan
                cliche semiotics ugh synth chillwave meditation. Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY 90's blog.</p>

                </Typography>

        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Pathways</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <div className="anchor" id="pathways"></div>
                                <h5>Pathways</h5>
                                <p>Intelligentsia salvia mustache 90's code editing brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag wolf squid tote bag. Tote bag cronut semiotics, raw denim deep v taxidermy
                                    messenger bag. Tofu YOLO Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick artisan cliche semiotics ugh synth chillwave meditation. Shabby
                                    chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY 90's blog.</p>

                                <p>Dreamcatcher street art Carles, stumptown gluten-free Kickstarter artisan Wes Anderson wolf pug. Godard sustainable you probably haven't heard of them, vegan farm-to-table Williamsburg slow-carb readymade disrupt deep v.
                                    Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies, forage
                                    fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.</p>


          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Mutations</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <div className="anchor" id="mutations"></div>
                                <h5>Mutations</h5>
                                <p>Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free Kickstarter artisan Wes Anderson wolf pug. Godard sustainable you probably haven't heard of them, vegan farm-to-table Williamsburg
                                    slow-carb readymade disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi
                                    McSweeney's Shoreditch selfies, forage fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.</p>

                                <div className="pl-4">
                                    <div className="anchor" id="mutations_sub"></div>
                                    <h6>Substitutions</h6>
                                    <p>PBR narwhal sustainable mixtape swag wolf squid tote bag plus and them then Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies,
                                        forage fingerstache food truck occupy YOLO Pitchfork fixie MDO of twitter fame iPhone fanny pack art party Portland. dd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick
                                        artisan cliche semiotics ugh synth chillwave meditation. Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan!</p>
                                    <br />

                                    <div className="anchor" id="mutations_ins"></div>
                                    <h6>Insertions</h6>
                                    <p>PBR narwhal sustainable mixtape swag wolf squid tote bag plus and them then Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies,
                                        forage fingerstache food truck occupy YOLO Pitchfork fixie MDO of twitter fame iPhone fanny pack art party Portland. dd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick
                                        artisan cliche semiotics ugh synth chillwave meditation. Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan!</p>
                                    <br />

                                    <div className="anchor" id="mutations_del"></div>
                                    <h6>Deletions</h6>
                                    <p>PBR narwhal sustainable mixtape swag wolf squid tote bag plus and them then Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies,
                                        forage fingerstache food truck occupy YOLO Pitchfork fixie MDO of twitter fame iPhone fanny pack art party Portland. dd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick
                                        artisan cliche semiotics ugh synth chillwave meditation. Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan!</p>
                                    <br />

                                    <div className="anchor" id="mutations_complex"></div>
                                    <h6>Complex Mutations</h6>
                                    <p>PBR narwhal sustainable mixtape swag wolf squid tote bag plus and them then Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies,
                                        forage fingerstache food truck occupy YOLO Pitchfork fixie MDO of twitter fame iPhone fanny pack art party Portland. dd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick
                                        artisan cliche semiotics ugh synth chillwave meditation. Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan!</p>
                                    <br />

                                    <div className="anchor" id="mutations_fusions"></div>
                                    <h6>Fusions</h6>
                                    <p>PBR narwhal sustainable mixtape swag wolf squid tote bag plus and them then Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies,
                                        forage fingerstache food truck occupy YOLO Pitchfork fixie MDO of twitter fame iPhone fanny pack art party Portland. dd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick
                                        artisan cliche semiotics ugh synth chillwave meditation. Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan!</p>
                                    <br />

                                    <div className="anchor" id="mutations_other"></div>
                                    <h6>Other Mutations</h6>
                                    <p>PBR narwhal sustainable mixtape swag wolf squid tote bag plus and them then Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies,
                                        forage fingerstache food truck occupy YOLO Pitchfork fixie MDO of twitter fame iPhone fanny pack art party Portland. dd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick
                                        artisan cliche semiotics ugh synth chillwave meditation. Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan!</p>
                                    <br />



                                </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>References</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <div className="anchor" id="references"></div>
                <h5>References</h5>
                <p>Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free Kickstarter artisan Wes Anderson wolf pug. Godard sustainable you probably haven't heard of them, vegan farm-to-table Williamsburg
                    slow-carb readymade disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi
                    McSweeney's Shoreditch selfies, forage fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.</p>
                    

                    <div className="pl-4">
                        <div className="anchor" id="references_pubmed"></div>
                        <h6>PubMed Refs</h6>
                        <p>PBR narwhal sustainable mixtape swag wolf squid tote bag plus and them then Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies,
                            forage fingerstache food truck occupy YOLO Pitchfork fixie MDO of twitter fame iPhone fanny pack art party Portland. dd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick
                            artisan cliche semiotics ugh synth chillwave meditation. Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan!</p>
                        <br />

                        <div className="anchor" id="references_uniprot"></div>
                        <h6>UniProt Refs</h6>
                        <p>PBR narwhal sustainable mixtape swag wolf squid tote bag plus and them then Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies,
                            forage fingerstache food truck occupy YOLO Pitchfork fixie MDO of twitter fame iPhone fanny pack art party Portland. dd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick
                            artisan cliche semiotics ugh synth chillwave meditation. Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan!</p>
                        <br />

                        <div className="anchor" id="references_wiki"></div>
                        <h6>Wikipedia Refs</h6>
                        <p>PBR narwhal sustainable mixtape swag wolf squid tote bag plus and them then Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies,
                            forage fingerstache food truck occupy YOLO Pitchfork fixie MDO of twitter fame iPhone fanny pack art party Portland. dd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick
                            artisan cliche semiotics ugh synth chillwave meditation. Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan!</p>
                        <br />
                    </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
             
                        </div>
                    </div>
            </main>
        </div>
    </div>

        </Layout>)
}
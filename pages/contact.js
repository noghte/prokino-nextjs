import Layout from '../components/ProkinoLayout';

export default function Contact() {
    return (<Layout>
        <div className="container">
    <div className="row" style= {{marginTop:'50px'}}>
      <hr />
        <div className="mbr-footer-content col-xs-12 col-md-3">
            <strong>Address</strong><br />
              University of Georgia<br />
Rm. A318 Life Sciences Building, 3rd floor 120 Green Street<br />
Athens, GA, USA, 30602-7229<br /><br /><br />
<strong>Contacts</strong><br />
Email: nkannan@uga.edu<br />
Phone: +1 (706) 542-1714<br />
        </div>
        <div className="mbr-footer-content col-xs-12 col-md-3"><strong>Links</strong><ul><li className=""><a className="text-black" href="http://esbg.bmb.uga.edu/index.html">ESBG lab</a></li><li className=""><a className="text-black" href="http://cobweb.cs.uga.edu/~kochut/">Computer Science Lab</a></li><li className=""><a className="text-black" href="https://iob.uga.edu/">Institue of Bioinformatics</a></li></ul></div>
        <div className="col-xs-12 col-md-6">
            <div className="mbr-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13239.951022622601!2d-83.37700768151184!3d33.941443033426644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f6136038fba6bf%3A0x73d36bc77f0c8997!2sDivision%20of%20Biological%20Sciences!5e0!3m2!1sen!2sus!4v1580237169551!5m2!1sen!2sus" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen=""></iframe></div>
        </div>
    </div>
</div>
    </Layout>)
}
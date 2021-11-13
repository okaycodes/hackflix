import Footer from "./../components/footer/index"

export default function FooterContainer(){
  return(
    <Footer>
      <Footer.Title>Questions? Contact Us</Footer.Title>
      <Footer.Row>
          <Footer.Item>
            <Footer.Link href="#">FAQs</Footer.Link>
            <Footer.Link href="#">Investor Relations</Footer.Link>
            <Footer.Link href="#">Ways to Watch</Footer.Link>
            <Footer.Link href="#">Corporate Information</Footer.Link>
            <Footer.Link href="#">Netflix Originals</Footer.Link>
          </Footer.Item>

          <Footer.Item>
            <Footer.Link href="#">Help Center</Footer.Link>
            <Footer.Link href="#">Jobs</Footer.Link>
            <Footer.Link href="#">Terms of Use</Footer.Link>
            <Footer.Link href="#">Contact us</Footer.Link>
          </Footer.Item>

          <Footer.Item>
            <Footer.Link href="#">Account</Footer.Link>
            <Footer.Link href="#">Redeem Gift Cards</Footer.Link>
            <Footer.Link href="#">Piracy</Footer.Link>
            <Footer.Link href="#">Speed Test</Footer.Link>
          </Footer.Item>

          <Footer.Item>
            <Footer.Link href="#">Media Center</Footer.Link>
            <Footer.Link href="#">Buy Gift Cards</Footer.Link>
            <Footer.Link href="#">Cookie Preferences</Footer.Link>
            <Footer.Link href="#">Legal Notice</Footer.Link>
          </Footer.Item>
        </Footer.Row>
        <Footer.Location>Netflix Nigeria</Footer.Location>
    </Footer>
  )
}

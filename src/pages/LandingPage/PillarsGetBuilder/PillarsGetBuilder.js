import AccordionItem from './AccordionItem'
import './PillarsGetBuilder.css'

const PillarsGetBuilder = () => {
  const accordionData = [
    {
      title: "1. Plan your business",
      content:
        "Narrow down your niche or area of interest for your website. Browse through the Domain Name Generator to help you find an available domain name you love. Check out the various tools, themes, and resources Shopify offers to help excite you about your entrepreneurial journey.",
    },
    {
      title: "2. Pick your platform",
      content:
        "Shopify is a website builder for commerce. Build an online or offline store using Shopify’s easy drag-and-drop no code website builder. Shopify offers reliable website hosting, domain name registration, countless tools, apps, stock photos, help resources, and so much more.",
    },
    {
      title: "3. Customize your website",
      content:
        "Make your own website, your way. Customize images, copy, themes, layouts, apps, and more. Add your own unique products to your website and create enticing descriptions for them. You can brand your website in so many ways using Shopify’s website builder. You don’t need coding skills to create a website that stands out online and offline.",
    },
    {
      title: "4. Launch your store",
      content: "Now that your website is ready to go, you can launch your website publicly. You can market your website and products by promoting on various social media channels, optimize your store for search engines with SEO, and other popular marketing strategies. Easily extend your capabilities by installing apps, sales channels, and much more via Shopify.",
    },
  ]
  return (
    <div className="pillars-get-builder">
      <div className="content-wrapper">
        <div className="text-content" id="pgb">
          <section className="headline">
            <h2>Build your own website in a few steps</h2>
            <p>Start your business website today, no credit card required.</p>
          </section>
          <div className="cta-form">
            <button>Get Started</button>
          </div>
        </div>
        <div className="accordion-container">
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default PillarsGetBuilder
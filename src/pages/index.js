import * as React from "react"
import Layout from "../components/layout"

// markup
const IndexPage = () => {
  return (
    <Layout>
      <h1>hi.</h1>
      <p>
        <span class="pronoun">I</span> <span class="verb">am</span> Paulina. <span class="pronoun">I</span> <span class="verb">have finished</span> my <span class="number">2nd</span> <span class="noun">year</span> of <span class="noun">BSc</span> in <span class="noun">Computer Science</span> at <span class="noun">University</span> of <span class="noun">Leeds</span> and <span class="pronoun">I</span> <span class="verb">am</span> currently <span class="verb">doing</span> a <span class="noun">placement year</span>, <span class="verb">working</span> as <span class="noun">Software Engineer</span> at <span class="noun">Bloomberg LP</span> as <span class="noun">part</span> of my <span class="noun">degree</span>. <span class="pronoun">I</span> <span class="verb">will be graduating</span> in <span class="noun">Jun</span> <span class="number">2022</span> and <span class="verb">plan</span> to <span class="verb">start working</span> towards a <span class="noun">Master’s Degree</span>.
      </p>
      <p>
        I have professional experience working with C++ on time sensitive distributed system processing up to 500,000 packets of data per day. As well as Python and TypeScript.
      </p>
      <p>
        I’m interested in Machine Learning and in particular Natural Language Processing and how ML can help us both better understand human communication and linguistics as well as how we can use it to generate content.
      </p>
      <p>
        I love expressing myself creatively, this website for example went through multiple iterations of designs and took far longer to design than to code. And in 2021 I’m committed to making at least one digital painting per month. When I need a break from staring at a screen I go bouldering. I love the feeling of adrenaline and accomplishment I experience after completing a particularly hard bouldering problem. It’s similar to satisfaction I feel after getting a programme to run or finally fixing a bug. I think that’s what draws me to both of those things.
      </p>
    </Layout>
  )
}

export default IndexPage
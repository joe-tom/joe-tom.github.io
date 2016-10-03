var codes = []
codes[0] = `<div style="background: #272822; overflow:auto;width:auto;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">var</span> <span style="color: #a6e22e">documents</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">[</span><span style="color: #e6db74">&#39;&#39;</span><span style="color: #f8f8f2">,</span><span style="color: #e6db74">&#39;&#39;</span><span style="color: #f8f8f2">,</span><span style="color: #e6db74">&#39;&#39;</span><span style="color: #f8f8f2">]</span>
<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">bag</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">{}</span>
<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">count</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">[{},{},{}]</span>
<span style="color: #75715e">// Get rid of punctuation, and make each document into an array of lowercase words.</span>
<span style="color: #a6e22e">documents</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">documents</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">map</span><span style="color: #f8f8f2">((</span><span style="color: #a6e22e">doc</span><span style="color: #f8f8f2">)</span> <span style="color: #f92672">=&gt;</span> <span style="color: #f8f8f2">{</span>
	<span style="color: #66d9ef">return</span> <span style="color: #a6e22e">doc</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">toLowerCase</span><span style="color: #f8f8f2">().</span><span style="color: #a6e22e">replace</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">/[^a-z ]/g</span><span style="color: #f8f8f2">,</span><span style="color: #e6db74">&#39;&#39;</span><span style="color: #f8f8f2">).</span><span style="color: #a6e22e">split</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&#39; &#39;</span><span style="color: #f8f8f2">)</span>
<span style="color: #f8f8f2">})</span>

<span style="color: #75715e">// Make an Object to represent all the words in the corpus</span>
<span style="color: #a6e22e">documents</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">forEach</span><span style="color: #f8f8f2">(</span><span style="color: #66d9ef">function</span> <span style="color: #f8f8f2">(</span><span style="color: #a6e22e">doc</span><span style="color: #f8f8f2">,</span><span style="color: #a6e22e">i</span><span style="color: #f8f8f2">)</span> <span style="color: #f8f8f2">{</span>
	<span style="color: #a6e22e">doc</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">forEach</span><span style="color: #f8f8f2">(</span><span style="color: #66d9ef">function</span> <span style="color: #f8f8f2">(</span><span style="color: #a6e22e">word</span><span style="color: #f8f8f2">)</span> <span style="color: #f8f8f2">{</span>
		<span style="color: #75715e">// Add this word to the global bag.</span>
		<span style="color: #a6e22e">bag</span><span style="color: #f8f8f2">[</span><span style="color: #a6e22e">word</span><span style="color: #f8f8f2">]</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">1</span>
		<span style="color: #75715e">// Add the count of this word in the document.</span>
		<span style="color: #75715e">// e.g. {the: 1, chocolate: 10}</span>
		<span style="color: #a6e22e">count</span><span style="color: #f8f8f2">[</span><span style="color: #a6e22e">i</span><span style="color: #f8f8f2">][</span><span style="color: #a6e22e">word</span><span style="color: #f8f8f2">]</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">((</span><span style="color: #a6e22e">count</span><span style="color: #f8f8f2">[</span><span style="color: #a6e22e">i</span><span style="color: #f8f8f2">][</span><span style="color: #a6e22e">word</span><span style="color: #f8f8f2">]</span> <span style="color: #f92672">||</span> <span style="color: #ae81ff">0</span><span style="color: #f8f8f2">)</span> <span style="color: #f92672">+</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">)</span>
	<span style="color: #f8f8f2">})</span>
<span style="color: #f8f8f2">})</span>


<span style="color: #75715e">// This is the Bag Of Words model, for each vector, every place corresponds to a word</span>
<span style="color: #75715e">// frequencies[10, 10, 0, 2]</span>
<span style="color: #75715e">//              |  |   |  |</span>
<span style="color: #75715e">//             the or and he</span>
<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">BOW</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">Object.</span><span style="color: #a6e22e">keys</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">bag</span><span style="color: #f8f8f2">)</span>

<span style="color: #75715e">// This array will hold the vectors of words for each document</span>
<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">words</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">[[],[],[]]</span>

<span style="color: #a6e22e">words</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">forEach</span><span style="color: #f8f8f2">(</span><span style="color: #66d9ef">function</span> <span style="color: #f8f8f2">(</span><span style="color: #a6e22e">vector</span><span style="color: #f8f8f2">,</span><span style="color: #a6e22e">i</span><span style="color: #f8f8f2">)</span> <span style="color: #f8f8f2">{</span>
	<span style="color: #a6e22e">vector</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">BOW</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">map</span><span style="color: #f8f8f2">(</span><span style="color: #66d9ef">function</span> <span style="color: #f8f8f2">(</span><span style="color: #a6e22e">word</span><span style="color: #f8f8f2">)</span> <span style="color: #f8f8f2">{</span>
		<span style="color: #66d9ef">return</span> <span style="color: #a6e22e">count</span><span style="color: #f8f8f2">[</span><span style="color: #a6e22e">i</span><span style="color: #f8f8f2">][</span><span style="color: #a6e22e">word</span><span style="color: #f8f8f2">]</span> <span style="color: #f92672">||</span> <span style="color: #ae81ff">0</span>
	<span style="color: #f8f8f2">})</span>
<span style="color: #f8f8f2">})</span>
</pre></div>`
/*
var documents = ['','','']
var bag = {}
var count = [{},{},{}]
// Get rid of punctuation, and make each document into an array of lowercase words.
documents = documents.map((doc) => {
  return doc.toLowerCase().replace(/[^a-z ]/g,'').split(' ')
})

// Make an Object to represent all the words in the corpus
documents.forEach(function (doc,i) {
  doc.forEach(function (word) {
    // Add this word to the global bag.
    bag[word] = 1
    // Add the count of this word in the document.
    // e.g. {the: 1, chocolate: 10}
    count[i][word] = ((count[i][word] || 0) + 1)
  })
})


// This is the Bag Of Words model, for each vector, every place corresponds to a word
// frequencies[10, 10, 0, 2]
//              |  |   |  |
//             the or and he
var BOW = Object.keys(bag)

// This array will hold the vectors of words for each document
var words = [[],[],[]]

words.forEach(function (vector,i) {
  vector = BOW.map(function (word) {
    return count[i][word] || 0
  })
})
*/

codes.forEach(function (code, i) {
  document.getElementsByClassName('text__code')[i].innerHTML = code
})
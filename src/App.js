import React, { Component } from 'react';
import './App.css';

import {PaperButton, PaperLayout, PaperCol, PaperForm, PaperInput, PaperSelect, PaperRadio, PaperCheckbox} from 'react-paper-css';

class App extends Component {
  render() {
    let testLog = (e) => {
      console.log('event is ', e);
    }

    return (
      <div className="App">
        <section>
          <h2>Flexbox</h2>
          <h5>Flexgrid</h5>

          <p>The flexgrid is a grid system that supports up to 12 columns per row. Because it uses flexbox (rather than just %widths), we also get the benefit of the fun parts of flexbox like alignment in more complex ways than normal.</p>

          <PaperLayout>
            <PaperCol colSize={'col-4'}>
              col-4
            </PaperCol>
            <PaperCol colSize={'col-4'}>
              col-4
            </PaperCol>
            <PaperCol colSize={'col-4'}>
              col-4
            </PaperCol>
          </PaperLayout>

          <PaperLayout>
            <PaperCol colDisplay={'sm-6 md-8 lg-10'}>
              sm-6 md-8 lg-10
            </PaperCol>
            <PaperCol colDisplay={'sm-6 md-4 lg-2'}>
              sm-6 md-4 lg-2
            </PaperCol>
          </PaperLayout>

          <PaperLayout>
            <PaperCol colDisplay={'sm-5'}>
              sm-5
            </PaperCol>
            <PaperCol colDisplay={'col-fill'}>
              col-fill
            </PaperCol>
            <PaperCol colDisplay={'col-fill'}>
              col-fill
            </PaperCol>
          </PaperLayout>

          <PaperLayout flexPosition={'flex-right'}>
            <PaperCol colSize={'col-3'}>
              col-3
            </PaperCol>
            <PaperCol colSize={'col-3'}>
              col-3
            </PaperCol>
          </PaperLayout>

          <PaperLayout flexPosition={'flex-center'}>
            <PaperCol colSize={'col-3'}>
              col-3
            </PaperCol>
            <PaperCol colSize={'col-9'}>
              col-9
            </PaperCol>
          </PaperLayout>

          <PaperLayout flexPosition={'flex-edges'}>
            <PaperCol colSize={'col-3'}>
              col-3
            </PaperCol>
            <PaperCol colSize={'col-3'}>
              col-3 (to edges "flex-edges")
            </PaperCol>
          </PaperLayout>

          <PaperLayout flexPosition={'flex-spaces'}>
            <PaperCol colSize={'col-3'}>
              col-3
            </PaperCol>
            <PaperCol colSize={'col-3'}>
              col-3 (spaced evenly "flex-spaces")
            </PaperCol>
          </PaperLayout>

          <PaperLayout flexPosition={'flex-top'}>
            <PaperCol colSize={'col-4'}>
              col-4
            </PaperCol>
            <PaperCol colSize={'col-4'}>
              col-4
            </PaperCol>
            <PaperCol colSize={'col-4'}>
              col-4 (top aligned "flex-top")

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.
            </PaperCol>
          </PaperLayout>

          <PaperLayout flexPosition={'flex-middle'}>
            <PaperCol colSize={'col-4'}>
              col-4
            </PaperCol>
            <PaperCol colSize={'col-4'}>
              col-4
            </PaperCol>
            <PaperCol colSize={'col-4'}>
              col-4 (middle aligned "flex-middle")

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.
            </PaperCol>
          </PaperLayout>

          <PaperLayout flexPosition={'flex-bottom'}>
            <PaperCol colSize={'col-4'}>
              col-4
            </PaperCol>
            <PaperCol colSize={'col-4'}>
              col-4
            </PaperCol>
            <PaperCol colSize={'col-4'}>
              col-4 (bottom aligned "flex-bottom")

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.
            </PaperCol>
          </PaperLayout>

          <PaperLayout>
            <PaperCol colSize={'col-3'} colDisplay={'align-bottom'}>
              col-3

              align-bottom

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.
            </PaperCol>
            <PaperCol colSize={'col-3'} colDisplay={'align-middle'}>
              col-3

              align-middle

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.
            </PaperCol>
            <PaperCol colSize={'col-3'} colDisplay={'align-top'}>
              col-3

              align-top

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.
            </PaperCol>
            <PaperCol colSize={'col-3'} >
              col-3

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.
            </PaperCol>
          </PaperLayout>
        </section>

        <section>
        <h2>Typography</h2>
        <p>How pretty is the text?</p>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices, eros non elementum accumsan, massa nulla
          aliquam libero, ut posuere justo nibh ac ipsum. Aliquam blandit commodo justo at laoreet. Suspendisse potenti. Duis
          magna neque, venenatis non libero a, tincidunt convallis diam. Donec vel fermentum ante. Quisque diam nisl, vestibulum
          imperdiet sapien nec, interdum fringilla lorem. Morbi sed arcu facilisis, maximus justo vel, porttitor nisl. Nam
          suscipit metus facilisis iaculis vestibulum.</p>
        </section>

        <section>
          <h2>BUTTONS</h2>

          <PaperButton buttonText={'Default'} />
          <PaperButton buttonText={'Large'} buttonType={'Large'} />
          <PaperButton buttonText={'Small'} buttonType={'Small'} />
          <PaperButton buttonText={'Disabled'} disabled />
        </section>

        <section>
          <h2>FORMS</h2>

          <PaperForm>
            <PaperInput inputSize={'input-block'} inputID={'testing'} label={'Testing Label'} placeholder={'input placeholder'} disabled={false} />
          </PaperForm>

          <PaperSelect>
            <option val={'one'}>One Thing</option>
            <option val={'two'}>Two Things</option>
            <option val={'three'}>Three Things</option>
            <option val={'four'}>Four Things</option>
          </PaperSelect>

          <p>Pass a function to the callbak prop, receives event from onChange</p>
          <PaperRadio checked={'two'} callback={testLog}>
            <option val={'one'} inputID={'one'} label={'first thing'}/>
            <option val={'two'} inputID={'two'} label={'second thing'}/>
            <option val={'three'} inputID={'three'} label={'third thing'}/>
          </PaperRadio>

          <PaperCheckbox callback={testLog}>
            <option val={'checkOne'} inputID={'checkOne'} label={'first check'}/>
            <option val={'checkTwo'} inputID={'checkTwo'} label={'second check'}/>
            <option val={'checkThree'} inputID={'checkThree'} label={'third check'}/>
          </PaperCheckbox>

          <p>with checkbox pre-checked</p>
          <PaperCheckbox checked={'threeThing'} callback={testLog}>
            <option val={'oneThing'} inputID={'oneThing'} label={'first thing'} />
            <option val={'twoThing'} inputID={'twoThing'} label={'second thing'}/>
            <option val={'threeThing'} inputID={'threeThing'} label={'third thing'}/>
          </PaperCheckbox>
        </section>

        <section>
          <h2>LISTS</h2>

          <ol>
            <li>Do this</li>
            <li>Then this</li>
            <li>Finally this</li>
            <li>Then we'll go one deeper</li>
            <ol>
                <li>Dillon</li>
                <li>Francis</li>
                <ol>
                  <li>What if we went...</li>
                  <li>One more deeper?</li>
                  <ol>
                    <li>DJ</li>
                    <li>Hanzel</li>
                    <ol>
                      <li>Five levels should be enough</li>
                      <li>Right?</li>
                    </ol>
                  </ol>
                </ol>
            </ol>
            <li>But don't forget this</li>
          </ol>

          <ul>
            <li>Do this</li>
            <li>Then this</li>
            <li>Finally this</li>
            <li>Then we'll go one deeper</li>
            <ul>
              <li>Dillon</li>
              <li>Francis</li>
              <ul>
                <li>What if we went...</li>
                <li>One more deeper?</li>
                <ul>
                  <li>DJ</li>
                  <li>Hanzel</li>
                  <ul>
                    <li>Five levels should be enough</li>
                    <li>Right?</li>
                  </ul>
                </ul>
              </ul>
            </ul>
            <li>But don't forget this</li>
          </ul>
        </section>

        <section>
          <h2>CODE</h2>

          <p>Let's make some pretty <code>&lt;code&gt;</code></p>
          <p>Print files backwards using <kbd>tac</kbd></p>
          <p>To stop a process, hit <kbd>ctrl + c</kbd></p>
          <pre>
            this is code ()
          </pre>
        </section>

        <section>
          <h2>TABLES</h2>

          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Position</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Bob Dylan</td>
                <td>Musician</td>
                <td>California, USA</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Eric Clapton</td>
                <td>Musician</td>
                <td>Ohio, USA</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Daniel Kahneman</td>
                <td>Psychologist</td>
                <td>California, USA</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>POPOVERS</h2>

          <p popover="Popover on left" popover-position="left">Popover left position</p>
          <p popover="Popover on top" popover-position="top">Popover top position</p>
          <p popover="Popover on bottom" popover-position="bottom">Popover bottom position</p>
          <p popover="Popover on right" popover-position="right">Popover right position</p>

          <button popover="Popover on top" popover-position="top">Popover on top and on a button!</button>
        </section>

        <section>
          <h2>CARDS</h2>

          <div className="card">
            <div className="card-body">
              <h4 className="card-title">My awesome Paper card!</h4>
              <h5 className="card-subtitle">Nice looking subtitle.</h5>
              <p className="card-text">This is another example of a card without image. Cards are also meant to be used without images, but with text/links/buttons.</p>
              <a className="card-link" href="">First link</a>
              <a className="card-link" href="">Second link</a>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h4 className="card-title">My awesome Paper card!</h4>
              <h5 className="card-subtitle">Nice looking subtitle.</h5>
              <p className="card-text">You can also place image on the bottom of the card.</p>
              <button>Let me go here!</button>
            </div>
            <img className="image-bottom" src="https://unsplash.it/550/250" alt="Card example" />
          </div>

          <div className="card">
            <div className="card-header">Header</div>
              <div className="card-body">
                <h4 className="card-title">My awesome Paper card!</h4>
                <h5 className="card-subtitle">Nice looking subtitle.</h5>
                <p className="card-text">You can also place image on the bottom of the card.</p>
                <button>Let me go here!</button>
              </div>
            <div className="card-footer">Footer</div>
          </div>

          <div className="card">
            <img src="https://picsum.photos/768" alt="Card example" />

            <div className="card-body">
              <h4 className="card-title">My awesome Paper card!</h4>
              <h5 className="card-subtitle">Nice looking subtitle.</h5>
              <p className="card-text">Notice that the card width in this example have been set to 20rem, otherwise it will try to fill the current container/row where the card is.</p>
              <button>Let me go here!</button>
            </div>
          </div>
        </section>

        <section>
          <h2>BADGES</h2>

          <h1>Example h1 heading <span className="badge">123</span></h1>
          <h2>Example h2 heading <span className="badge secondary">123</span></h2>
          <h3>Example h3 heading <span className="badge success">123</span></h3>
          <h4>Example h4 heading <span className="badge warning">123</span></h4>
          <h5>Example h5 heading <span className="badge danger">123</span></h5>
          <h6>Example h6 heading <span className="badge">123</span></h6>
        </section>

        <section>
          <h2>COLORS</h2>

          <p className="text-primary">Text primary</p>
          <p className="text-secondary">Text secondary</p>
          <p className="text-success">Text success</p>
          <p className="text-warning">Text warning</p>
          <p className="text-danger">Text danger</p>
          <p className="text-muted">Text muted</p>

          <div className="row flex-center">
            <div className="sm-2 col background-primary">Background primary</div>
            <div className="sm-2 col background-secondary">Background secondary</div>
            <div className="sm-2 col background-success">Background success</div>
            <div className="sm-2 col background-warning">Background warning</div>
            <div className="sm-2 col background-danger">Background danger</div>
          </div>
        </section>

        <section>
          <h2>BORDERS AND SHADOWS</h2>

          <div className="row flex-spaces">
            <div className="sm-3 col border border-primary">Default Border</div>
            <div className="sm-3 col border border-2 border-primary">Border-2</div>
            <div className="sm-3 col border border-3 border-primary">Border-3</div>
          </div>
          <div className="row flex-spaces">
            <div className="sm-3 col border border-4 border-primary">Border-4</div>
            <div className="sm-3 col border border-5 border-primary">Border-5</div>
            <div className="sm-3 col border border-6 border-primary">Border-6</div>
          </div>

          <div className="row child-borders">
            <div className="sm-2 col border border-primary">Border primary</div>
            <div className="sm-2 col border border-secondary">Border secondary</div>
            <div className="sm-2 col border border-success">Border success</div>
            <div className="sm-2 col border border-warning">Border warning</div>
            <div className="sm-2 col border border-danger">Border danger</div>
            <div className="sm-2 col border background-primary border-white">Border white</div>
          </div>
          <div className="row child-borders">
            <div className="sm-2 col border border-primary">Border primary</div>
            <div className="sm-2 col border border-secondary">Border secondary</div>
            <div className="sm-2 col border border-success">Border success</div>
            <div className="sm-2 col border border-warning">Border warning</div>
            <div className="sm-2 col border border-danger">Border danger</div>
            <div className="sm-2 col border background-primary border-white">Border white</div>
          </div>

          <div className="row flex-center child-borders">
            <div className="sm-2 col">1</div>
            <div className="sm-2 col">2</div>
            <div className="sm-2 col">3</div>
            <div className="sm-2 col">4</div>
            <div className="sm-2 col">5</div>
            <div className="sm-2 col">6</div>
          </div>

          <div className="row flex-spaces child-borders">
            <div className="sm-3 col border-dashed">Dashed</div>
            <div className="sm-3 col border-dotted">Dotted</div>
            <div className="sm-3 col border-dashed border-thick">Dashed Thick</div>
            <div className="sm-3 col border-dotted border-thick">Dotted Thick</div>
          </div>

          <div className="row flex-spaces child-borders">
            <div className="sm-3 col shadow shadow-large">Large</div>
            <div className="sm-3 col shadow">Default</div>
            <div className="sm-3 col shadow shadow-small">Small</div>
            <div className="sm-3 col shadow shadow-hover">Hover</div>
          </div>

          <div className="row flex-spaces child-borders child-shadows">
            <div className="sm-3 col">Shadow</div>
            <div className="sm-3 col">Shadow</div>
            <div className="sm-3 col">Shadow</div>
          </div>

          <div className="row flex-spaces child-borders child-shadows-hover">
            <div className="sm-3 col">Shadow</div>
            <div className="sm-3 col">Shadow</div>
            <div className="sm-3 col">Shadow</div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

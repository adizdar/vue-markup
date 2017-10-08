# The Ultimate Unit Testing Cheat-sheet
### _For_ Mocha, Chai and Sinon

__using mocha/chai/sinon for node.js unit-tests? check out my utility: [mocha-stirrer](https://www.npmjs.com/package/mocha-stirrer) to easily reuse test components and mock require dependencies__

Source: https://gist.github.com/yoavniran/1e3b0162e1545055429e
___
* [Sinon Chai](#sinon-chai)
* [Chai](#chai)
* [Sinon](#sinon)
* [Mocha](#mocha)

<a name="sinon-chai"/>
## Sinon Chai

links: [GitHub](https://github.com/domenic/sinon-chai) - [Chai plugin](http://chaijs.com/plugins/sinon-chai)

<table>
    <thead>
        <tr>
            <th>Sinon.JS property/method</th>
            <th>Sinon–Chai assertion</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>called</td>
            <td>spy.should.have.been.called</td>
        </tr>
        <tr>
            <td>callCount</td>
            <td>spy.should.have.callCount(n)</td>
        </tr>
        <tr>
            <td>calledOnce</td>
            <td>spy.should.have.been.calledOnce</td>
        </tr>
        <tr>
            <td>calledTwice</td>
            <td>spy.should.have.been.calledTwice</td>
        </tr>
        <tr>
            <td>calledThrice</td>
            <td>spy.should.have.been.calledThrice</td>
        </tr>
        <tr>
            <td>calledBefore</td>
            <td>spy1.should.have.been.calledBefore(spy2)</td>
        </tr>
        <tr>
            <td>calledAfter</td>
            <td>spy1.should.have.been.calledAfter(spy2)</td>
        </tr>
        <tr>
            <td>calledWithNew</td>
            <td>spy.should.have.been.calledWithNew</td>
        </tr>
        <tr>
            <td>alwaysCalledWithNew</td>
            <td>spy.should.always.have.been.calledWithNew</td>
        </tr>
        <tr>
            <td>calledOn</td>
            <td>spy.should.have.been.calledOn(context)</td>
        </tr>
        <tr>
            <td>alwaysCalledOn</td>
            <td>spy.should.always.have.been.calledOn(context)</td>
        </tr>
        <tr>
            <td>calledWith</td>
            <td>spy.should.have.been.calledWith(...args)</td>
        </tr>
        <tr>
            <td>alwaysCalledWith</td>
            <td>spy.should.always.have.been.calledWith(...args)</td>
        </tr>
        <tr>
            <td>calledWithExactly</td>
            <td>spy.should.have.been.calledWithExactly(...args)</td>
        </tr>
        <tr>
            <td>alwaysCalledWithExactly</td>
            <td>spy.should.always.have.been.calledWithExactly(...args)</td>
        </tr>
        <tr>
            <td>calledWithMatch</td>
            <td>spy.should.have.been.calledWithMatch(...args)</td>
        </tr>
        <tr>
            <td>alwaysCalledWithMatch</td>
            <td>spy.should.always.have.been.calledWithMatch(...args)</td>
        </tr>
        <tr>
            <td>returned</td>
            <td>spy.should.have.returned(returnVal)</td>
        </tr>
        <tr>
            <td>alwaysReturned</td>
            <td>spy.should.have.always.returned(returnVal)</td>
        </tr>
        <tr>
            <td>threw</td>
            <td>spy.should.have.thrown(errorObjOrErrorTypeStringOrNothing)</td>
        </tr>
        <tr>
            <td>alwaysThrew</td>
            <td>spy.should.have.always.thrown(errorObjOrErrorTypeStringOrNothing)</td>
        </tr>
    </tbody>
</table>

___
<a name="chai"/>
## Chai

links: [chai home](http://chaijs.com/) , [docs](http://chaijs.com/api/)

#### Expect/Should (BDD)

links: [docs](http://chaijs.com/api/bdd/)

Chains:


   * to
   * be
    * been
    * is
    * that
    * which
    * and
    * has
    * have
    * with
    * at
    * of
    * same

<table>
    <thead>
        <tr>
            <th>Assertions</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
<tr>
		<td>.a(type)</td>
		<td>
<p>
	    @param{ String }type<br/>
    	@param{ String }message_optional_
</p>
</p>
The a and an assertions are aliases that can be used either as language chains or to assert a value's type.
</p>
</p><br/>
// typeof  <br/>
<ul>
<li> expect('test').to.be.a('string');
</li>
<li> expect({ foo: 'bar' }).to.be.an('object');</li>
<li>expect(null).to.be.a('null');</li>
<li>expect(undefined).to.be.an('undefined');</li>
</ul>
</p>

// language chain
<ul>
<li>expect(foo).to.be.an.instanceof(Foo);</li>
</ul></td>
	</tr>
<tr>
		<td>.above(value)</td>
		<td>
    <p>
	@param{ Number }value<br/>
    @param{ String }message_optional_
</p>
<p>
Asserts that the target is greater than value.

<ul><li>expect(10).to.be.above(5);</li></ul>
</p>
<p>
Can also be used in conjunction with length to assert a minimum length. The benefit being a more informative error message than if the length was supplied directly.

<ul><li>expect('foo').to.have.length.above(2);</li>
<li>expect([ 1, 2, 3 ]).to.have.length.above(2);</li>
</ul>
</p>

</td>
	</tr>
<tr>
		<td>.all</td>
		<td>Sets the all flag (opposite of the any flag) later used by the keys assertion.
<ul><li>expect(foo).to.have.all.keys('bar', 'baz');</li></ul>
</td>
	</tr>

<tr>
		<td>.any</td>
		<td>Sets the any flag, (opposite of the all flag) later used in the keys assertion.

<ul><li>expect(foo).to.have.all.keys('bar', 'baz');</li></ul>

</td>
	</tr>

<tr>
		<td>.arguments</td>
		<td>Asserts that the target is an arguments object.
<br/><br/>
function test () {<br/>
  expect(arguments).to.be.arguments;<br/>
}</td>
	</tr>

<tr>
		<td>.below(value)</td>
		<td>
    <p>
	@param{ Number }value<br/>
    @param{ String }message_optional_
</p>
<p>
Asserts that the target is less than value.

<ul><li> expect(5).to.be.below(10);</li></ul>
</p>
<p>
Can also be used in conjunction with length to assert a maximum length. The benefit being a more informative error message than if the length was supplied directly.

<ul>
<li>expect('foo').to.have.length.below(4);</li>
<li>expect([ 1, 2, 3 ]).to.have.length.below(4);</li>
</ul>

</p>
</td>
	</tr>


</td>

<tr>
		<td>.change(function)</td>
		<td>
    <p>
	@param{ String }object<br/>
    @param{ String }propertyname<br/>
    @param{ String }message_optional_<br/>
</p>
<p>
Asserts that a function changes an object property
<br/><br/>
var obj = { val: 10 };
<br/>
var fn = function() { obj.val += 3 };
<br/>
var noChangeFn = function() { return 'foo' + 'bar'; };

<ul><li>expect(fn).to.change(obj, 'val');</li>
<li>expect(noChangFn).to.not.change(obj, 'val')</li></ul>


</td>
	</tr>
	</tr>
<tr>
		<td>.closeTo(expected, delta)</td>
		<td>
    <p>
	@param{ Number }expected<br/>
    @param{ Number }delta</br>
    @param{ String }message_optional_
</p>
<p>
Asserts that the target is equal expected, to within a +/- delta range.
</p>
<ul><li>expect(1.5).to.be.closeTo(1, 0.5);
</li></ul>

</td>
	</tr>
<tr>
		<td>.decrease(function)</td>
		<td>
<p>
    @param{ String }object<br/>
    @param{ String }propertyname<br/>
    @param{ String }message_optional_
</p>
<p>
Asserts that a function decreases an object property
</p>

var obj = { val: 10 };
<br/><br/>
var fn = function() { obj.val = 5 };
<ul><li>expect(fn).to.decrease(obj, 'val');
</li></ul>

</td>
	</tr>
<tr>
		<td>.deep</td>
		<td>Sets the deep flag, later used by the equal and property assertions.
	<br/>
<ul><li>expect(foo).to.deep.equal({ bar: 'baz' });</li>
<li>expect({ foo: { bar: { baz: 'quux' } } }).to.have.deep.property('foo.bar.baz', 'quux');</li></ul>

</td>
	</tr>
	<tr>
		<td>.empty</td>
		<td>Asserts that the target's length is 0. For arrays, it checks the length property. For objects, it gets the count of enumerable keys.
	<br/>
<ul><li>expect([]).to.be.empty;
</li><li>expect('').to.be.empty;</li>
<li>expect({}).to.be.empty;
</li></ul>
</td>
	</tr>

<tr>
		<td>.eql(value)</td>
		<td>
    	<p>
	@param{ Mixed }value<br/>
   	@param{ String }message_optional_
</p>
<p>
Asserts that the target is deeply equal to value.
</p>
<ul><li>expect([ 1, 2, 3 ]).to.eql([ 1, 2, 3 ]);
</li>
<li>expect({ foo: 'bar' }).to.eql({ foo: 'bar' });
</li></ul>

</td>
	</tr>
<tr>
		<td>.equal(value)</td>
		<td>
    	<p>
	@param{ Mixed }value<br/>
    @param{ String }message_optional_
</p>
<p>
Asserts that the target is strictly equal (===) to value. Alternately, if the deep flag is set, asserts that the target is deeply equal to value.
</p>

<ul><li>expect('hello').to.equal('hello');</li>
<li>expect(42).to.equal(42);</li>
<li>expect(1).to.not.equal(true);</li>
<li>expect({ foo: 'bar' }).to.not.equal({ foo: 'bar' });</li>
<li>expect({ foo: 'bar' }).to.deep.equal({ foo: 'bar' });</li></ul>

<tr>
		<td>.exist</td>
		<td>Asserts that the target is neither null nor undefined.

var foo = 'hi'
  , bar = null
  , baz;
<br/><br/>
<ul><li>expect(foo).to.exist;</li>
<li>expect(bar).to.not.exist;</li>
<li>expect(baz).to.not.exist;</li></ul>

</td>
	</tr>


<tr>
		<td>.false</td>
		<td>Asserts that the target is false.
<ul><li>expect(false).to.be.false;</li>
<li>expect(0).to.not.be.false;</li></ul>

</td>
	</tr>

<tr>
		<td>.include(value)
</td>
		<td>
    <p>
	@param{ Object | String | Number }obj<br/>
    @param{ String }message_optional_
</p>
<p>
The include and contain assertions can be used as either property based language chains or as methods to assert the inclusion of an object in an array or a substring in a string. When used as language chains, they toggle the contains flag for the keys assertion.
</p>

<ul><li>expect([1,2,3]).to.include(2);</li>
<li>expect('foobar').to.contain('foo');</li>
<li>expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');</td></li></ul>

	</tr>
<tr>
		<td>.increase(function)</td>
		<td>
    <p>
	@param{ String }object<br/>
    @param{ String }propertyname<br/>
    @param{ String }message_optional_
</p>
<p>
Asserts that a function increases an object property
</p>

var obj = { val: 10 };<br/>
var fn = function() { obj.val = 15 };</br>
<ul><li> expect(fn).to.increase(obj, 'val');</li></ul>

</td>
	</tr>
<tr>
		<td>.instanceof(constructor)</td>
		<td>
    <p>
	@param{ Constructor }constructor<br/>
    @param{ String }message_optional_
</p>
<p>
Asserts that the target is an instance of constructor.
</p>

var Tea = function (name) { this.name = name; }<br/>
  , Chai = new Tea('chai');

<ul><li>expect(Chai).to.be.an.instanceof(Tea);</li>
<li>expect([ 1, 2, 3 ]).to.be.instanceof(Array);</li></ul>

</td>
	</tr>
<tr>
		<td>.itself</td>
		<td>Sets the itself flag, later used by the respondTo assertion.
<br/>
function Foo() {}<br/>
Foo.bar = function() {}<br/>
Foo.prototype.baz = function() {}<br/>

<ul><li>expect(Foo).itself.to.respondTo('bar');</li>
<li>expect(Foo).itself.not.to.respondTo('baz');</li></ul>

</td>
	</tr>
<tr>
		<td>.keys(key1, [key2], [...])</td>
		<td>
<p>
    @param{ String... | Array | Object }keys
</p>
<p>
Asserts that the target contains any or all of the passed-in keys. Use in combination with any, all, contains, or have will affect what will pass.<br/>
When used in conjunction with any, at least one key that is passed in must exist in the target object. This is regardless whether or not the have or contain qualifiers are used. Note, either any or all should be used in the assertion. If neither are used, the assertion is defaulted to all.
<br/>
When both all and contain are used, the target object must have at least all of the passed-in keys but may have more keys not listed.
<br/>
When both all and have are used, the target object must both contain all of the passed-in keys AND the number of keys in the target object must match the number of keys passed in (in other words, a target object must have all and only all of the passed-in keys).
<br/>
</p>
<ul><li>expect({ foo: 1, bar: 2 }).to.have.any.keys('foo', 'baz');</li>
<li>expect({ foo: 1, bar: 2 }).to.have.any.keys('foo');</li>
<li>expect({ foo: 1, bar: 2 }).to.contain.any.keys('bar', 'baz');</li>
<li>expect({ foo: 1, bar: 2 }).to.contain.any.keys(['foo']);</li>
<li>expect({ foo: 1, bar: 2 }).to.contain.any.keys({'foo': 6});</li>
<li>expect({ foo: 1, bar: 2 }).to.have.all.keys(['bar', 'foo']);</li>
<li> expect({ foo: 1, bar: 2 }).to.have.all.keys({'bar': 6, 'foo', 7});</li>
<li>expect({ foo: 1, bar: 2, baz: 3 }).to.contain.all.keys(['bar', 'foo']);</li>
<li>expect({ foo: 1, bar: 2, baz: 3 }).to.contain.all.keys([{'bar': 6}}]);</li>
</ul>

</td>
	</tr>
<tr>
		<td>.least(value)</td>
		<td>
    <p>
	@param{ Number }value<br/>
    @param{ String }message_optional_
</p>
<p>
Asserts that the target is greater than or equal to value.

<ul><li>expect(10).to.be.at.least(10);</li></ul>
</p></td>
	</tr>

<tr>
		<td>.length(value)</td>
		<td>

<p>
    @param{ Number }length<br/>
    @param{ String }message_optional_<br/><br/>

Asserts that the target's length property has the expected value.
</p>

<ul>
<li>expect([ 1, 2, 3]).to.have.length(3);</li>
<li>expect('foobar').to.have.length(6);</li>
</ul>

<p>
Can also be used as a chain precursor to a value comparison for the length property.
</p>
<ul>
<li>expect('foo').to.have.length.above(2);</li>
<li>expect([ 1, 2, 3 ]).to.have.length.above(2);</li>
<li>expect('foo').to.have.length.below(4);</li>
<li>expect('foo').to.have.length.below(4);</li>
<li>expect([ 1, 2, 3 ]).to.have.length.below(4);</li>
<li>expect('foo').to.have.length.within(2,4);</li>
<li>expect([ 1, 2, 3 ]).to.have.length.within(2,4);</li>
</ul>

</td>
	</tr>

<tr>
		<td>.match(regexp)</td>
		<td>
<p>
    @param{ RegExp }RegularExpression<br/>
    @param{ String }message_optional_
</p>
<p>
Asserts that the target matches a regular expression.
</p>

<ul><li>expect('foobar').to.match(/^foo/);</li></ul>

</td>
	</tr>

<tr>
		<td>.members(set)</td>
		<td>
    <p>
	@param{ Array }set<br/>
    @param{ String }message_optional_
</p>
<p>
Asserts that the target is a superset of set, or that the target and set have the same strictly-equal (===) members. Alternately, if the deep flag is set, set members are compared for deep equality.
</p>
<ul><li>expect([1, 2, 3]).to.include.members([3, 2]);</li>
<li>expect([1, 2, 3]).to.not.include.members([3, 2, 8]);</li>
<li>expect([4, 2]).to.have.members([2, 4]);</li>
<li>expect([5, 2]).to.not.have.members([5, 2, 1]);</li>
<li>expect([{ id: 1 }]).to.deep.include.members([{ id: 1 }]);</li></ul>

</td>
	</tr>
<tr>
		<td>.most(value)</td>
		<td>

<p>
	@param{ Number }value<br/>
    @param{ String }message_optional_
</p>
<p>
Asserts that the target is less than or equal to value.
</p>

<ul><li> expect(5).to.be.at.most(5);</li></ul>

<p>
Can also be used in conjunction with length to assert a maximum length. The benefit being a more informative error message than if the length was supplied directly.
</p>

<ul><li>expect('foo').to.have.length.of.at.most(4);</li>
<li> expect([ 1, 2, 3 ]).to.have.length.of.at.most(3);</li></ul>

</td>
	</tr>
 <tr>
            <td>.not</td>
		<td>Negates any of assertions following in the chain.

<ul><li>expect(foo).to.not.equal('bar');</li>
<li>expect(goodFn).to.not.throw(Error);</li><li>expect({ foo: 'baz' }).to.have.property('foo').and.not.equal('bar');</li></ul>

</td>
        </tr>

<tr>
		<td>.null</td>
		<td>Asserts that the target is null.
<br/>
<ul><li>expect(null).to.be.null;</li>
<li>expect(undefined).not.to.be.null;</li></ul>

</td>
	</tr>


<tr>
		<td>.ok</td>
		<td>Asserts that the target is truthy.</td>
	</tr>

<tr>
		<td>.ownProperty(name)</td>
		<td>
<p>
    @param{ String }name<br/>
    @param{ String }message_optional_
</p>
<p>
Asserts that the target has an own property name.
</p>

<ul><li> expect('test').to.have.ownProperty('length');</li></ul>

</td>
	</tr>

<tr>
		<td>.property(name, [value])</td>
		<td>
<p>
    @param{ String }name<br/>
    @param{ Mixed }value(optional)<br/>
    @param{ String }message_optional_
</p>
<p>
Asserts that the target has a property name, optionally asserting that the value of that property is strictly equal to value. If the deep flag is set, you can use dot- and bracket-notation for deep references into objects and arrays.
</p>

// simple referencing<br/>
var obj = { foo: 'bar' };<br/>

<ul><li>expect(obj).to.have.property('foo');</li><li>expect(obj).to.have.property('foo', 'bar');</li></ul>
<br/>
// deep referencing<br/>

var deepObj = {<br/>
    green: { tea: 'matcha' }<br/>
  , teas: [ 'chai', 'matcha', { tea: 'konacha' } ]<br/>
};<br/>

<ul>
<li>expect(deepObj).to.have.deep.property('green.tea', 'matcha');</li>
<li>expect(deepObj).to.have.deep.property('teas[1]', 'matcha');</li>
<li>expect(deepObj).to.have.deep.property('teas[2].tea', 'konacha');</li>
</ul>

<p>You can also use an array as the starting point of a deep.property assertion, or traverse nested arrays.</p>

var arr = [<br/>
    [ 'chai', 'matcha', 'konacha' ]<br/>
  , [ { tea: 'chai' }<br/>
    , { tea: 'matcha' }<br/>
    , { tea: 'konacha' } ]<br/>
];<br/>

<ul>
<li>expect(arr).to.have.deep.property('[0][1]', 'matcha');</li>
<li>expect(arr).to.have.deep.property('[1][2].tea', 'konacha');</li>
</ul>

<p>
Furthermore, property changes the subject of the assertion to be the value of that property from the original object. This permits for further chainable assertions on that property.
</p>

<ul><li>expect(obj).to.have.property('foo').that.is.a('string');</li>
<li>expect(deepObj).to.have.property('green').that.is.an('object').that.deep.equals({ tea: 'matcha' });</li>
<li>expect(deepObj).to.have.property('teas').that.is.an('array').with.deep.property('[2]').that.deep.equals({ tea: 'konacha' });</li></ul>

</td>
	</tr>

<tr>
		<td>.respondTo(method)</td>
		<td>
<p>
    @param{ String }method<br/>
    @param{ String }message_optional_
</p>

<p>
Asserts that the object or class target will respond to a method.
</p>
Klass.prototype.bar = function(){};<br/>

<ul><li>expect(Klass).to.respondTo('bar');</li>
<li>expect(obj).to.respondTo('bar');</li></ul>

<p>
To check if a constructor will respond to a static function, set the itself flag.
</p>

Klass.baz = function(){};<br/>

<ul><li>expect(Klass).itself.to.respondTo('baz');</li></ul>

</td>
	</tr>
<tr>
		<td>.satisfy(method)</td>
		<td>
    <p>
	@param{ Function }matcher<br/>
    @param{ String }message_optional_
</p>
<p>
Asserts that the target passes a given truth test.
</p>

<ul><li>expect(1).to.satisfy(function(num) { return num > 0; });</li></ul>

</td>
	</tr>
<tr>
		<td>.string(string)</td>
		<td>
<p>
    @param{ String }string<br/>
    @param{ String }message_optional_
</p>
<p>
Asserts that the string target contains another string.
</p>
<ul><li>expect('foobar').to.have.string('bar');</li></ul>


</td>
	</tr>

<tr>
		<td>.throw(constructor)</td>
		<td>
<p>    
	@param{ ErrorConstructor }constructor<br/>
    @param{ String | RegExp }expectederror message<br/>
    @param{ String }message_optional_<br/>
    @see: [https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types]()
</p>
Asserts that the function target will throw a specific error, or specific type of error (as determined using instanceof), optionally with a RegExp or string inclusion test for the error's message.
<br/><br/>
var err = new ReferenceError('This is a bad function.');
<br/></br>
var fn = function () { throw err; }
<br/>
<ul>
<li>expect(fn).to.throw(ReferenceError);</li>
<li> expect(fn).to.throw(Error);</li>
<li>expect(fn).to.throw(/bad function/);</li>
<li>expect(fn).to.not.throw('good function');</li>
<li>expect(fn).to.throw(ReferenceError, /bad function/);</li>
<li>expect(fn).to.throw(err);</li>
<li>expect(fn).to.not.throw(new RangeError('Out of range.'));</li>
</ul>
Please note that when a throw expectation is negated, it will check each parameter independently, starting with error constructor type. The appropriate way to check for the existence of a type of error but for a message that does not match is to use and.

<ul>
<li>expect(fn).to.throw(ReferenceError)
   .and.not.throw(/good function/);
</li>
</ul>
</td>
	</tr>
<tr>
		<td>.true</td>
		<td>Asserts that the target is true.

<ul><li>expect(true).to.be.true;</li>
<li>expect(1).to.not.be.true;</li></ul>

</td>
	</tr>
<tr>
		<td>.undefined</td>
		<td>Asserts that the target is undefined.

<ul><li>expect(undefined).to.be.undefined;</li>
<li>expect(null).to.not.be.undefined;</li></ul>

</td>
	</tr>

<tr>
		<td>.within(start, finish)</td>
		<td>
    <p>
	@param{ Number }startlowerbound inclusive<br/>
    @param{ Number }finishupperbound inclusive<br/>
    @param{ String }message_optional_
</p>
Asserts that the target is within a range.

<ul><li> expect(7).to.be.within(5,10);</li></ul>
<br/>

Can also be used in conjunction with length to assert a length range. The benefit being a more informative error message than if the length was supplied directly.

<ul><li>expect('foo').to.have.length.within(2,4);</li>
<li>expect([ 1, 2, 3 ]).to.have.length.within(2,4);</li></ul>

</td>
	</tr>
</tbody>
</table>





___
<a name="sinon"/>
## Sinon

links: [sinon home](http://sinonjs.org/) , [docs](http://sinonjs.org/docs/) , [code](https://github.com/cjohansen/Sinon.JS)

### Spy

```js
	var spy = sinon.spy();
```
Creates an anonymous function that records arguments, this value, exceptions and return values for all calls.

```js
	var spy = sinon.spy(myFunc);
```

Spies on the provided function

```js
	var spy = sinon.spy(object, "method");
```

Creates a spy for object.method and replaces the original method with the spy. The spy acts exactly like the original method in all cases. The original method can be restored by calling object.method.restore(). The returned spy is the function object which replaced the original method. spy === object.method.


<table>
    <thead>
        <tr>
            <th>Spy method</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>spy.callCount</td>
		<td>The number of recorded calls.</td>
        </tr>
	<tr>
		<td>spy.called</td>
		<td>true if the spy was called at least once</td>
	</tr>
	<tr>
		<td>spy.calledOnce</td>
		<td>true if spy was called exactly once</td>
	</tr>
	<tr>
		<td>spy.calledTwice</td>
		<td>true if the spy was called exactly twice</td>
	</tr>
	<tr>
		<td>spy.calledThrice</td>
		<td>true if the spy was called exactly thrice</td>
	</tr>
	<tr>
		<td>spy.firstCall</td>
		<td>The first call</td>
	</tr>
	<tr>
		<td>spy.secondCall</td>
		<td>The second call</td>
	</tr>
	<tr>
		<td>spy.thirdCall</td>
		<td>The third call</td>
	</tr>
	<tr>
		<td>spy.lastCall</td>
		<td>The last call</td>
	</tr>
	<tr>
		<td>spy.calledBefore(anotherSpy);</td>
		<td>Returns true if the spy was called before anotherSpy</td>
	</tr>
	<tr>
		<td>spy.calledAfter(anotherSpy);</td>
		<td>Returns true if the spy was called after anotherSpy</td>
	</tr>
	<tr>
		<td>spy.calledOn(obj);</td>
		<td>Returns true if the spy was called at least once with obj as this</td>
	</tr>
	<tr>
		<td>spy.alwaysCalledOn(obj);</td>
		<td>Returns true if the spy was always called with obj as this.</td>
	</tr>
	<tr>
		<td>spy.calledWith(arg1, arg2, ...);</td>
		<td>Returns true if spy was called at least once with the provided arguments. Can be used for partial matching, Sinon only checks the provided arguments against actual arguments, so a call that received the provided arguments (in the same spots) and possibly others as well will return true.</td>
	</tr>
<tr>
		<td>spy.alwaysCalledWith(arg1, arg2, ...);</td>
		<td>Returns true if spy was always called with the provided arguments (and possibly others).</td>
	</tr>
<tr>
		<td>spy.calledWithExactly(arg1, arg2, ...);</td>
		<td>Returns true if spy was called at least once with the provided arguments and no others.</td>
	</tr>
<tr>
		<td>spy.alwaysCalledWithExactly(arg1, arg2, ...);</td>
		<td>Returns true if spy was always called with the exact provided arguments.</td>
	</tr>
<tr>
		<td>spy.calledWithMatch(arg1, arg2, ...);</td>
		<td>Returns true if spy was called with matching arguments (and possibly others). This behaves the same as spy.calledWith(sinon.match(arg1), sinon.match(arg2), ...).</td>
	</tr>
<tr>
		<td>spy.alwaysCalledWithMatch(arg1, arg2, ...);</td>
		<td>Returns true if spy was always called with matching arguments (and possibly others). This behaves the same as spy.alwaysCalledWith(sinon.match(arg1), sinon.match(arg2), ...).</td>
	</tr>
<tr>
		<td>spy.calledWithNew();</td>
		<td>Returns true if spy/stub was called the new operator. Beware that this is inferred based on the value of the this object and the spy function’s prototype, so it may give false positives if you actively return the right kind of object.</td>
	</tr>
<tr>
		<td>spy.neverCalledWith(arg1, arg2, ...);</td>
		<td>Returns true if the spy/stub was never called with the provided arguments.</td>
	</tr>
<tr>
		<td>spy.neverCalledWithMatch(arg1, arg2, ...);</td>
		<td>Returns true if the spy/stub was never called with matching arguments. This behaves the same as spy.neverCalledWith(sinon.match(arg1), sinon.match(arg2), ...).</td>
	</tr>
<tr>
		<td>spy.threw();</td>
		<td>Returns true if spy threw an exception at least once.</td>
	</tr>
<tr>
		<td>spy.threw("TypeError");</td>
		<td>Returns true if spy threw an exception of the provided type at least once.</td>
	</tr>
<tr>
		<td>spy.threw(obj);</td>
		<td>Returns true if spy threw the provided exception object at least once.</td>
	</tr>
<tr>
		<td>spy.alwaysThrew();</td>
		<td>Returns true if spy always threw an exception.</td>
	</tr>
<tr>
		<td>spy.alwaysThrew("TypeError");</td>
		<td>Returns true if spy always threw an exception of the provided type.</td>
	</tr>
<tr>
		<td>spy.alwaysThrew(obj);</td>
		<td>Returns true if spy always threw the provided exception object.</td>
	</tr>
<tr>
		<td>spy.returned(obj);</td>
		<td>Returns true if spy returned the provided value at least once. Uses deep comparison for objects and arrays. Use spy.returned(sinon.match.same(obj)) for strict comparison (see <a href="#sinonMatchers">Matchers</a>). </td>
	</tr>
<tr>
		<td>spy.alwaysReturned(obj);</td>
		<td>Returns true if spy always returned the provided value.</td>
	</tr>
<tr>
		<td>var spyCall = spy.getCall(n);</td>
		<td>Returns the nth <a href="#spycall">call</a>). Accessing individual calls helps with more detailed behavior verification when the spy is called more than once. Example:
<br/><br/>
sinon.spy(jQuery, "ajax");
<br/>
jQuery.ajax("/stuffs");
<br/>
var spyCall = jQuery.ajax.getCall(0);
<br/>
assertEquals("/stuffs", spyCall.args[0]);</td>
	</tr>
<tr>
		<td>spy.thisValues</td>
		<td>Array of this objects, spy.thisValues[0] is the this object for the first call.</td>
	</tr>
<tr>
		<td>spy.args</td>
		<td>Array of arguments received, spy.args[0] is an array of arguments received in the first call.</td>
	</tr>
<tr>
		<td>spy.exceptions</td>
		<td>Array of exception objects thrown, spy.exceptions[0] is the exception thrown by the first call. If the call did not throw an error, the value at the call’s location in .exceptions will be ‘undefined’.</td>
	</tr>
<tr>
		<td>spy.returnValues</td>
		<td>Array of return values, spy.returnValues[0] is the return value of the first call. If the call did not explicitly return a value, the value at the call’s location in .returnValues will be ‘undefined’.</td>
	</tr>
<tr>
		<td>spy.reset()</td>
		<td>Resets the state of a spy.</td>
	</tr>
<tr>
		<td>spy.printf(format string", [arg1, arg2, ...])`</td>
		<td>Returns the passed format string with the following replacements performed:

<br/><ul>
<li>%n: the name of the spy (“spy” by default)</li>
<li>%c: the number of times the spy was called, in words (“once”, “twice”, etc.)</li>
<li>%C: a list of string representations of the calls to the spy, with each call prefixed by a newline and four spaces</li>
<li>%t: a comma-delimited list of this values the spy was called on</li>
<li>%<var>n</var>: the formatted value of the nth argument passed to printf</li>
<li> %*: a comma-delimited list of the (non-format string) arguments passed to printf</li>

</td>
	</tr>
</tbody>
</table>

<a name="spycall"/>
#### Individual spy calls

<table>
    <thead>
        <tr>
            <th>Spy method</th>
            <th>Description</th>
        </tr>
    </thead>

<tbody>
        <tr>
            <td>var spyCall = spy.getCall(n)</td>
            <td>Returns the nth [call](#spycall). Accessing individual calls helps with more detailed behavior verification when the spy is called more than once. Example: </td>
        </tr>
<tr>
            <td>spyCall.calledOn(obj);</td>
            <td>Returns true if obj was this for this call.</td>
        </tr>
<tr>
            <td>spyCall.calledWith(arg1, arg2, ...);</td>
            <td>Returns true if call received provided arguments (and possibly others).</td>
        </tr>
<tr>
            <td>spyCall.calledWithExactly(arg1, arg2, ...);</td>
            <td>Returns true if call received provided arguments and no others.</td>
        </tr>
<tr>
            <td>spyCall.calledWithMatch(arg1, arg2, ...);</td>
            <td>Returns true if call received matching arguments (and possibly others). This behaves the same as spyCall.calledWith(sinon.match(arg1), sinon.match(arg2), ...).</td>
        </tr>
<tr>
            <td>spyCall.notCalledWith(arg1, arg2, ...);</td>
            <td>Returns true if call did not receive provided arguments.</td>
        </tr>
<tr>
            <td>spyCall.notCalledWithMatch(arg1, arg2, ...);</td>
            <td>    Returns true if call did not receive matching arguments. This behaves the same as spyCall.notCalledWith(sinon.match(arg1), sinon.match(arg2), ...).</td>
        </tr>
<tr>
            <td>spyCall.threw();</td>
            <td>Returns true if call threw an exception.</td>
        </tr>
<tr>
            <td>spyCall.threw(TypeError");</td>
            <td>Returns true if call threw exception of provided type.</td>
        </tr>
<tr>
            <td>spyCall.threw(obj);</td>
            <td>Returns true if call threw provided exception object.</td>
        </tr>

<tr>
            <td>spyCall.thisValue</td>
            <td>The call’s this value.</td>
        </tr>
<tr>
            <td>spyCall.args</td>
            <td>Array of received arguments.</td>
        </tr>
<tr>
            <td>spyCall.exception</td>
            <td>Exception thrown, if any.</td>
        </tr>
<tr>
            <td>spyCall.returnValue</td>
            <td>Return value.</td>
        </tr>
</tbody>
</table>

----

### Stub

link: [stubs doc](http://sinonjs.org/docs/#stubs)

```js
	var stub = sinon.stub();
```
Creates an anonymous stub function.

```js
	var stub = sinon.stub(object, "method");
```
Replaces object.method with a stub function. The original function can be restored by calling object.method.restore(); (or stub.restore();). An exception is thrown if the property is not already a function, to help avoid typos when stubbing methods.

```js
var stub = sinon.stub(object, "method", func);
```
Replaces object.method with a func, wrapped in a spy. As usual, object.method.restore(); can be used to restore the original method.

```js
	var stub = sinon.stub(obj);
```
 Stubs all the object’s methods. Note that it’s usually better practice to stub individual methods, particularly on objects that you don’t understand or control all the methods for (e.g. library dependencies). Stubbing individual methods tests intent more precisely and is less susceptible to unexpected behavior as the object’s code evolves.
    If you want to create a stub object of MyConstructor, but don’t want the constructor to be invoked, use this utility function.

``` js
    var stub = sinon.createStubInstance(MyConstructor)
```


<table>
    <thead>
        <tr>
            <th>Stub method</th>
            <th>Description</th>
        </tr>
    </thead>

<tbody>
        <tr>
            <td>stub.withArgs(arg1[, arg2, ...]);</td>
            <td>Stubs the method only for the provided arguments. This is useful to be more expressive in your assertions, where you can access the spy with the same call. It is also useful to create a stub that can act differently in response to different arguments.</td>
        </tr>
	<tr>
		<td>stub.onCall(n);</td>
		<td>Defines the behavior of the stub on the nth call. Useful for testing sequential interactions.</td>
	</tr>
	<tr>
		<td>stub.onFirstCall();</td>
		<td>Alias for stub.onCall(0);</td>
	</tr>
	<tr>
		<td>stub.onSecondCall();</td>
		<td>Alias for stub.onCall(1);</td>
	</tr>
	<tr>
		<td>stub.onThirdCall();</td>
		<td>Alias for stub.onCall(2);</td>
	</tr>
	<tr>
		<td>stub.returns(obj);</td>
		<td>Makes the stub return the provided value.</td>
	</tr>
	<tr>
		<td>stub.returnsArg(index);</td>
		<td>Causes the stub to return the argument at the provided index. stub.returnsArg(0); causes the stub to return the first argument.</td>
	</tr>
	<tr>
		<td>stub.returnsThis();</td>
		<td>Causes the stub to return its this value. Useful for stubbing jQuery-style fluent APIs.</td>
	</tr>
	<tr>
		<td>stub.throws();</td>
		<td>Causes the stub to throw an exception (Error).</td>
	</tr>
	<tr>
		<td>stub.throws("TypeError");</td>
		<td>Causes the stub to throw an exception of the provided type.</td>
	</tr>
	<tr>
		<td>stub.throws(obj);</td>
		<td>Causes the stub to throw the provided exception object.</td>
	</tr>
	<tr>
		<td>stub.callsArg(index);</td>
		<td>Causes the stub to call the argument at the provided index as a callback function. stub.callsArg(0); causes the stub to call the first argument as a callback.</td>
	</tr>
	<tr>
		<td>stub.callsArgOn(index, context);</td>
		<td>Like above but with an additional parameter to pass the this context.</td>
	</tr>
	<tr>
		<td>stub.callsArgWith(index, arg1, arg2, ...);</td>
		<td>Like callsArg, but with arguments to pass to the callback.</td>
	</tr>
	<tr>
		<td>stub.callsArgOnWith(index, context, arg1, arg2, ...);</td>
		<td>Like above but with an additional parameter to pass the this context.</td>
	</tr>
	<tr>
		<td>stub.yields([arg1, arg2, ...])</td>
		<td>Almost like callsArg. Causes the stub to call the first callback it receives with the provided arguments (if any). If a method accepts more than one callback, you need to use callsArg to have the stub invoke other callbacks than the first one.</td>
	</tr>
	<tr>
		<td>stub.yieldsOn(context, [arg1, arg2, ...])</td>
		<td>Like above but with an additional parameter to pass the this context.</td>
	</tr>
	<tr>
		<td>stub.yieldsTo(property, [arg1, arg2, ...])</td>
		<td>Causes the spy to invoke a callback passed as a property of an object to the spy. Like yields, yieldsTo grabs the first matching argument, finds the callback and calls it with the (optional) arguments.</td>
	</tr>
	<tr>
		<td>stub.yieldsToOn(property, context, [arg1, arg2, ...])</td>
		<td>Like above but with an additional parameter to pass the this context.</td>
	</tr>
	<tr>
		<td>spy.yield([arg1, arg2, ...]) </td>
		<td>Invoke callbacks passed to the spy with the given arguments. If the spy was never called with a function argument, yield throws an error. Also aliased as invokeCallback. </td>
</tr>
	<tr>
		<td>spy.yieldTo(callback, [arg1, arg2, ...])</td>
		<td>Invokes callbacks passed as a property of an object to the spy. Like yield, yieldTo grabs the first matching argument, finds the callback and calls it with the (optional) arguments.</td>
	</tr>
	<tr>
		<td>spy.callArg(argNum)</td>
		<td>Like yield, but with an explicit argument number specifying which callback to call. Useful if a function is called with more than one callback, and simply calling the first callback is not desired.</td>
	</tr>
	<tr>
		<td>spy.callArgWith(argNum, [arg1, arg2, ...])</td>
		<td> Like `callArg`, but with arguments.</td>
	</tr>
	<tr>
		<td>stub.callsArgAsync(index);</td>
		<td>Same as their corresponding non-Async counterparts, but with callback being deferred (executed not immediately but after short timeout and in another “thread”)</td>
	</tr>
	<tr>
		<td>stub.callsArgOnAsync(index, context);</td>
		<td></td>
	</tr>
	<tr>
		<td>stub.callsArgWithAsync(index, arg1, arg2, ...);</td>
		<td></td>
	</tr>
	<tr>
		<td>stub.callsArgOnWithAsync(index, context, arg1, arg2, ...);</td>
		<td></td>
	</tr>
	<tr>
		<td>stub.yieldsAsync([arg1, arg2, ...])</td>
		<td></td>
	</tr>
	<tr>
		<td>stub.yieldsOnAsync(context, [arg1, arg2, ...])</td>
		<td></td>
	</tr>
	<tr>
		<td>stub.yieldsToAsync(property, [arg1, arg2, ...])</td>
		<td></td>
	</tr>
	<tr>
		<td>stub.yieldsToOnAsync(property, context, [arg1, arg2, ...])</td>
		<td>Same as their corresponding non-Async counterparts, but with callback being deferred (executed not immediately but after short timeout and in another “thread”)</td>
	</tr>
</tbody>
</table>

---

### Mock

link: [docs](http://sinonjs.org/docs/#mocks)

```js
	var mock = sinon.mock(obj);
```
Creates a mock for the provided object. Does not change the object, but returns a mock object to set expectations on the object’s methods.

```js
	var expectation = mock.expects("method");
```
Overrides obj.method with a mock function and returns it. See expectations below.

```js
	mock.restore();
```

Restores all mocked methods.

```js
	mock.verify();
```
Verifies all expectations on the mock. If any expectation is not satisfied, an exception is thrown. Also restores the mocked methods.

<table>
    <thead>
        <tr>
            <th>Expectation method</th>
            <th>Description</th>
        </tr>
    </thead>

<tbody>
	<tr>
		<td>var expectation = sinon.expectation.create([methodName]);</td>
		<td>Creates an expectation without a mock object, basically an anonymous mock function. Method name is optional and is used in exception messages to make them more readable.</td>
	</tr>
<tr>
		<td>var expectation = sinon.mock();</td>
		<td>The same as the above.</td>
	</tr>
<tr>
		<td>expectation.atLeast(number);</td>
		<td>Specify the minimum amount of calls expected.</td>
	</tr>
<tr>
		<td>expectation.atMost(number);</td>
		<td>Specify the maximum amount of calls expected.</td>
	</tr>
<tr>
		<td>expectation.never();</td>
		<td>Expect the method to never be called.</td>
	</tr>
<tr>
		<td>expectation.once();</td>
		<td>Expect the method to be called exactly once.</td>
	</tr>
<tr>
		<td>expectation.twice();</td>
		<td>Expect the method to be called exactly twice.</td>
	</tr>
<tr>
		<td>expectation.thrice();</td>
		<td>Expect the method to be called exactly thrice.</td>
	</tr>
<tr>
		<td>expectation.exactly(number);</td>
		<td>Expect the method to be called exactly number times.</td>
	</tr>
<tr>
		<td>expectation.withArgs(arg1, arg2, ...);</td>
		<td>Expect the method to be called with the provided arguments and possibly others.</td>
	</tr>
<tr>
		<td>expectation.withExactArgs(arg1, arg2, ...);</td>
		<td>Expect the method to be called with the provided arguments and no others.</td>
	</tr>
<tr>
		<td>expectation.on(obj);</td>
		<td>Expect the method to be called with obj as this.</td>
	</tr>
<tr>
		<td>expectation.verify();</td>
		<td>Verifies the expectation and throws an exception if it’s not met.</td>
	</tr>
</tbody>
</table>

---
<a name="sinonMatchers"/>
### Matchers

<table>
    <thead>
        <tr>
            <th>Matchers method</th>
            <th>Description</th>
        </tr>
    </thead>

<tbody>
<tr>
		<td>sinon.match(number)</td>
		<td>Requires the value to be == to the given number.
</td>
	</tr>
<tr>
		<td>sinon.match(string)</td>
		<td>Requires the value to be a string and have the expectation as a substring.</td>
	</tr>
<tr>
		<td>sinon.match(regexp)</td>
		<td>Requires the value to be a string and match the given regular expression.</td>
	</tr>
<tr>
		<td>sinon.match(object)</td>
		<td>Requires the value to be not null or undefined and have at least the same properties as expectation. This supports nested matchers.</td>
	</tr>
<tr>
		<td>sinon.match(function)</td>
		<td>See [custom matchers](#sinonCustomMatchers)</td>
	</tr>
<tr>
		<td>sinon.match.any</td>
		<td>Matches anything.</td>
	</tr>
<tr>
		<td>sinon.match.defined</td>
		<td>Requires the value to be defined.</td>
	</tr>
<tr>
		<td>sinon.match.truthy</td>
		<td>Requires the value to be truthy.</td>
	</tr>
<tr>
		<td>sinon.match.falsy</td>
		<td>Requires the value to be falsy.</td>
	</tr>
<tr>
		<td>sinon.match.bool</td>
		<td>Requires the value to be a boolean.</td>
	</tr>
<tr>
		<td>sinon.match.number</td>
		<td>Requires the value to be a number.</td>
	</tr>
<tr>
		<td>sinon.match.string</td>
		<td>Requires the value to be a string.</td>
	</tr>
<tr>
		<td>sinon.match.object</td>
		<td>Requires the value to be an object.</td>
	</tr>
<tr>
		<td>sinon.match.func</td>
		<td>Requires the value to be a function.</td>
	</tr>
<tr>
		<td>sinon.match.array</td>
		<td>Requires the value to be an array.</td>
	</tr>
<tr>
		<td>sinon.match.regexp</td>
		<td>Requires the value to be a regular expression.</td>
	</tr>
<tr>
		<td>sinon.match.date</td>
		<td>Requires the value to be a date object.</td>
	</tr>
<tr>
		<td>sinon.match.same(ref)</td>
		<td>Requires the value to strictly equal ref.</td>
	</tr>
<tr>
		<td>sinon.match.typeOf(type)</td>
		<td>Requires the value to be of the given type, where type can be one of "undefined", "null", "boolean", "number", "string", "object", "function", "array", "regexp" or "date".</td>
	</tr>
<tr>
		<td>sinon.match.instanceOf(type)</td>
		<td>Requires the value to be an instance of the given type.</td>
	</tr>
<tr>
		<td>sinon.match.has(property[, expectation])</td>
		<td>Requires the value to define the given property. The property might be inherited via the prototype chain. If the optional expectation is given, the value of the property is deeply compared with the expectation. The expectation can be another matcher.</td>
	</tr>
<tr>
		<td>sinon.match.hasOwn(property[, expectation])</td>
		<td>Same as sinon.match.has but the property must be defined by the value itself. Inherited properties are ignored.</td>
	</tr>
</tbody>
</table>

#### Combining matchers

All matchers implement `and` and `or`. This allows to logically combine mutliple matchers. The result is a new matchers that requires both (and) or one of the matchers (or) to return true.

```js
	var stringOrNumber = sinon.match.string.or(sinon.match.number);

	var bookWithPages = sinon.match.instanceOf(Book).and(sinon.match.has("pages"));
```

<a name="sinonCustomMatchers"/>
#### Custom matchers

Custom matchers are created with the `sinon.match` factory which takes a test function and an optional message. The test function takes a value as the only argument, returns `true` if the value matches the expectation and `false` otherwise. The message string is used to generate the error message in case the value does not match the expectation.

```js
var trueIsh = sinon.match(function (value) {
    return !!value;
}, "trueIsh");
```
___
## Mocha


links: [home](http://mochajs.org/)


<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Description</th>
        </tr>
    </thead>

<tbody>

<tr>
		<td>Synchronous code</td>
		<td>
describe('Array', function(){<br/>
  describe('#indexOf()', function(){<br/>
it('should return -1 when the value is not present', function(){ <br/>
[1,2,3].indexOf(5).should.equal(-1); <br/>
[1,2,3].indexOf(0).should.equal(-1);<br/>
    })<br/>
  })<br/>
})</td>
	</tr>

<tr>
		<td>Asynchronous code</td>
		<td>
describe('User', function(){<br/>
describe('#save()', function(){<br/>
    it('should save without error', function(done){<br/>
      var user = new User('Luna');<br/>
      user.save(function(err){<br/>
        if (err) throw err;<br/>
        done();<br/>
      });<br/>
    })<br/>
  })<br/>
})<br/>
</td>
	</tr>
<tr>
		<td>Done with Error </td>
		<td>describe('User', function(){

describe('#save()', function(){

    it('should save without error', function(done){

      var user = new User('Luna');
      user.save(done);
    })
  })
})</td>
	</tr>
<tr>
		<td>hooks</td>
		<td>
describe('hooks', function() {<br/>
<br/>
  before(function() {<br/>
    // runs before all tests in this block<br/>
  })<br/>
<br/><br/>
  after(function(){<br/>
    // runs after all tests in this block<br/>
  })<br/>
<br/><br/>
  beforeEach(function(){<br/>
    // runs before each test in this block<br/>
  })<br/>
<br/><br/>
  afterEach(function(){<br/>
    // runs after each test in this block<br/>
  })<br/>
<br/><br/>
  // test cases<br/>
})
<br/><br/>
Each hook also accepting done as first parameter to support async methods
 </td>
	</tr>
<tr>
		<td>Pending tests</td>
		<td>describe('Array', function(){<br/>
  describe('#indexOf()', function(){<br/>
    it('should return -1 when the value is not present');<br/>
  })<br/>
})
</td>
	</tr>
<tr>
		<td>Exclusive tests</td>
		<td>describe('Array', function(){<br/>
  describe.only('#indexOf()', function(){<br/>
    ...<br/>
  })<br/>
})
<br/><br/>
Or a specific test-case:

describe('Array', function(){<br/>
  describe('#indexOf()', function(){<br/>
   		it.only('should return -1 unless present', function(){<br/>
	    })<br/>
<br/><br/>
    	it('should return the index when present', function(){<br/>
	    })<br/>
  })<br/>
})
</td>
	</tr>
<tr>
		<td>Inclusive tests</td>
		<td>describe('Array', function(){<br/>
  describe.skip('#indexOf()', function(){<br/>
    ...<br/>
  })<br/>
})<br/><br/>
Or a specific test-case:

describe('Array', function(){<br/>
  describe('#indexOf()', function(){<br/>
   	 it.skip('should return -1 unless present', function(){<br/>
    	})<br/>
<br/><br/>
    	it('should return the index when present', function(){<br/>
	    })<br/>
  })<br/>
})
</td>
	</tr>
</tbody>
</table>


#### Flags

Usage: mocha [debug] [options] [files]

<table>
    <thead>
        <tr>
            <th>Flag</th>
            <th>Description</th>
        </tr>
    </thead>

<tbody>

<tr>
		<td>-w, --watch</td>
		<td>Executes tests on changes to JavaScript in the CWD, and once initially.</td>
	</tr>

<tr>
		<td>--compilers</td>
		<td>coffee-script is no longer supported out of the box. CS and similar transpilers may be used by mapping the file extensions (for use with --watch) and the module name. For example --compilers coffee:coffee-script with CoffeeScript 1.6- or --compilers coffee:coffee-script/register with CoffeeScript 1.7+.</td>
	</tr>

<tr>
		<td>-b, --bail</td>
		<td>Only interested in the first exception? use --bail !</td>
	</tr>

<tr>
		<td>-d, --debug</td>
		<td>Enables node's debugger support, this executes your script(s) with node debug <file ...> allowing you to step through code and break with the debugger statement. Note the difference between mocha debug and mocha --debug: mocha debug will fire up node's built-in debug client, mocha --debug will allow you to use a different interface — such as the Blink Developer Tools.</td>
	</tr>

<tr>
		<td>--globals <names></td>
		<td>Accepts a comma-delimited list of accepted global variable names. For example, suppose your app deliberately exposes a global named app and YUI, you may want to add --globals app,YUI. It also accepts wildcards. You could do --globals '*bar' and it would match foobar, barbar, etc. You can also simply pass in '*' to ignore all globals.</td>
	</tr>

<tr>
		<td>--check-leaks</td>
		<td>By default Mocha will not check for global variables leaked while running tests, to enable this pass --check-leaks, to specify globals that are acceptable use --globals, for example --globals jQuery,MyLib.</td>
	</tr>

<tr>
		<td>-r, --require <name></td>
		<td>The --require option is useful for libraries such as should.js, so you may simply --require should instead of manually invoking require('should') within each test file. Note that this works well for should as it augments Object.prototype, however if you wish to access a module's exports you will have to require them, for example var should = require('should'). Furthermore, it can be used with relative paths, e.g. --require ./test/helper.js</td>
	</tr>

<tr>
		<td>-u, --ui <name></td>
		<td>The --ui option lets you specify the interface to use, defaulting to "bdd".</td>
	</tr>

<tr>
		<td>-R, --reporter <name></td>
		<td>The --reporter option allows you to specify the reporter that will be used, defaulting to "dot". This flag may also be used to utilize third-party reporters. For example if you npm install mocha-lcov-reporter you may then do --reporter mocha-lcov-reporter.</td>
	</tr>

<tr>
		<td>-t, --timeout <ms></td>
		<td>Specifies the test-case timeout, defaulting to 2 seconds. To override you may pass the timeout in milliseconds, or a value with the s suffix, ex: --timeout 2s or --timeout 2000 would be equivalent.</td>
	</tr>

<tr>
		<td>-s, --slow <ms></td>
		<td>Specify the "slow" test threshold, defaulting to 75ms. Mocha uses this to highlight test-cases that are taking too long.
</td>
	</tr>

<tr>
		<td>-g, --grep <pattern></td>
		<td>The --grep option when specified will trigger mocha to only run tests matching the given pattern which is internally compiled to a RegExp.
</td>
</tr>
</tbody>
</table>

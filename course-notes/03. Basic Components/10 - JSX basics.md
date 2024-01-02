React Simplified - Beginner

# Basic Components: JSX

---

`JSX` is a different syntax for writing `HTML`. It can't be read by the browser and must be first compiled into `JavaScript`.

To create React elements without `JSX`, you need to use `React.createElement()`, which is incredibly verbose and difficult to read and write, especially when dealing with nested elements.

The HTML element, props, and children are passed as arguments to `React.createElement()`.

---

#### Examples:

The `React.createElement()` way:

```
return React.createElement('h1', { id: 'Test' }, 'Heading');
```

The `JSX` way:

```
return <h1 id="Test">Heading</h1>;
```

---

#### Nested examples:

The `React.createElement()` way:

```
return React.createElement(
    'h1',
     { id: 'Test' },
     'Heading',
     React.createElement('span', null, 'Span')
 );
```

The `JSX` way:

```
return (
    <h1 id="Test">
        Heading <span>Span</span>
    </h1>
);
```

---

### Syntax differences

In `JSX`, HTML attributes are generally referred to as `props`.

#### 1. Attribute names

In `HTML`, properties with two (2) or more words are separated by **dashes** (-).

```
<h1 tab-index='0' data-color='red'>Heading</h1>
```

In `JSX`, properties with two (2) or more words are written in **camel case**, with the _exception_ of **custom data and aria attributes**. For example, `tab-index` is written as `tabIndex`, but `data-color` remains the same.

```
<h1 tabIndex='0' data-color='red'>Heading</h1>
```

---

#### 2. CSS classes

In `JSX`, you can't use the word `class` to declare a `CSS class` attribute because it's a **reserved JavaScript keyword**. Instead, you must use a unique attribute name created for `JSX`. For example, `class` must be written as `className`.

`HTML` example:

```
<h1 class="primary">Heading</h1>
```

`JSX` example:

```
<h1 className="primary">Heading</h1>
```

---

You also can't use other **reserved keywords**, such as `for`. Instead, you must use `htmlFor`.

`HTML` example:

```
<label for="id">Text</label>
```

`JSX` example:

```
<label htmlFor="id">Text</label>
```

---

#### 3. Style props

In `JSX`, styles must be passed in as `objects`, whereas in `HTML`, styles are defined by a `string`.

In `JSX`, anything being passed in as something other than a `string` must be wrapped in `curly braces`. Additionally, it's important not to omit the braces encapsulating the `object` itself (they're separate).

`HTML` example:

```
<label id='1' style="color: red;">Text</label>
```

`JSX` example:

```
<label id={1} style={{ color: 'red'}}>Text</label>
```

---

#### 4. Code evaluation

Anytime you insert a pair of `curly braces` inside `JSX`, you'll be **executing** `JavaScript` code, and returning the **output** of that `JavaScript` expression.

`JSX` code:

```
return <span>{2 + 2}</span>
```

`HTML` result:

```
<span>4</span>
```

---

#### 5. Closing statements

In `JSX`, every `tag` must _always_ be **closed**, either using a closing tag `<></>`, or by self-closing `</>`. This is not always required in `HTML`.

`HTML` example:

```
<input type='text'>
```

`JSX` example(s):

```
<input type='text' />
```

```
<input type='text'></input>
```

---

#### 6. Values

In `JSX`, when setting the `value` of an `HTML input`, note that it can **never be changed** in React.

If you want to be able to **change** the value, you must use `defaultValue` instead.

Example:

```
<input type='number' defaultValue={3} />
```

---

#### 7. JSX as variables

In `JavaScript`, you can define `JSX` as `variables`, which can then be called inside `JSX` by encapsulating the `variable name` inside `curly braces`.

This is an **important concept to understand**, and will be used **frequently** throughout development.

Example:

```
const label = <label htmlFor='inputId'>Text</label>

return <div>{label}</div>
```

---

#### 8. Returning multiple elements

In `JSX`, there will be situations which call for the return of more than one `HTML element`. However, you can't do this without nesting the elements inside a parent container.

Error example:

```
// Wouldn't work:
return (
    <h1>Heading</h1>
    <div>Content</div>
);
```

Correct example:

```
return (
    <div>
        <h1>Heading</h1>
        <div>Content</div>
    </div>
);
```

---

In `JSX`, you can also return information other than `HTML`, including:

1. Arrays: `return [1, 2, 3]`
2. Strings: `return 'This is a string'`
3. Numbers: `return 1`
4. Undefined: `return undefined`
5. Null: `return null`

---

`Undefined`, `null`, and `false` render **nothing**, and will be used extensively throughout React development.

```
return <div>{undefined}</div>
```

```
return <div>{null}</div>
```

```
return <div>{false}</div>
```

However, note that zero (0), despite being "falsey", will **still render** zero (0):

```
return <div>{0}</div>
```

---

https://courses.webdevsimplified.com/view/courses/react-simplified-beginner/1764768-basic-components/5598811-10-jsx-basics

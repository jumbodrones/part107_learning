/* @ds-bundle: {"format":4,"namespace":"TuftsDroneProgramDesignSystem_779650","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Callout","sourcePath":"components/content/Callout.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"StepList","sourcePath":"components/content/StepList.jsx"},{"name":"Tag","sourcePath":"components/content/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"1c42e5b0de23","components/buttons/IconButton.jsx":"f456f8f5398d","components/content/Badge.jsx":"9a98e2724704","components/content/Callout.jsx":"05658f7c6c71","components/content/Card.jsx":"7ea0f72a3d5b","components/content/StepList.jsx":"4d5805ee0355","components/content/Tag.jsx":"0c506976a257","components/forms/Checkbox.jsx":"921ecaf7eafd","components/forms/Input.jsx":"c1ef3ad490da","components/forms/Select.jsx":"fe894c533b00","ui_kits/drone-program-site/Article.jsx":"6d3e92eaf48f","ui_kits/drone-program-site/Home.jsx":"c8867e864b2e","ui_kits/drone-program-site/Library.jsx":"a0363f2e8b7e","ui_kits/drone-program-site/Nav.jsx":"84a7b442c276"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TuftsDroneProgramDesignSystem_779650 = window.TuftsDroneProgramDesignSystem_779650 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    padding: '6px 14px',
    fontSize: '0.8125rem',
    gap: '6px'
  },
  md: {
    padding: '10px 20px',
    fontSize: '0.9375rem',
    gap: '8px'
  },
  lg: {
    padding: '14px 28px',
    fontSize: '1.0625rem',
    gap: '10px'
  }
};
const palettes = {
  primary: {
    bg: 'var(--tufts-blue)',
    fg: '#fff',
    border: 'var(--tufts-blue)',
    hover: '#2f7ac7'
  },
  deep: {
    bg: 'var(--jumbo-blue)',
    fg: '#fff',
    border: 'var(--jumbo-blue)',
    hover: '#012353'
  },
  brown: {
    bg: 'var(--tufts-brown)',
    fg: '#fff',
    border: 'var(--tufts-brown)',
    hover: '#4f3a2e'
  }
};

/**
 * Tufts primary action button. Solid fills lead with Tufts Blue; outline and
 * ghost step down for secondary actions.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  color = 'primary',
  disabled = false,
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  onClick,
  style = {},
  ...rest
}) {
  const sz = sizes[size] || sizes.md;
  const pal = palettes[color] || palettes.primary;
  const [hover, setHover] = React.useState(false);
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sz.gap,
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: sz.fontSize,
    letterSpacing: '0.01em',
    lineHeight: 1,
    padding: sz.padding,
    borderRadius: 'var(--radius-md)',
    border: '2px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-base) var(--ease-standard), color var(--dur-base), border-color var(--dur-base), transform var(--dur-fast)',
    transform: hover && !disabled ? 'translateY(-1px)' : 'none',
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: {
      background: hover && !disabled ? pal.hover : pal.bg,
      color: pal.fg,
      borderColor: hover && !disabled ? pal.hover : pal.border
    },
    outline: {
      background: hover && !disabled ? 'rgba(62,142,222,0.08)' : 'transparent',
      color: pal.bg,
      borderColor: pal.border
    },
    ghost: {
      background: hover && !disabled ? 'rgba(62,142,222,0.10)' : 'transparent',
      color: pal.bg,
      borderColor: 'transparent'
    },
    onbrand: {
      background: hover && !disabled ? '#fff' : 'rgba(255,255,255,0.92)',
      color: 'var(--jumbo-blue)',
      borderColor: 'transparent'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...(variants[variant] || variants.primary),
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Square/circular icon-only button for toolbars and compact controls.
 */
function IconButton({
  children,
  size = 'md',
  variant = 'ghost',
  round = false,
  disabled = false,
  ariaLabel,
  onClick,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  }[size] || 40;
  const [hover, setHover] = React.useState(false);
  const variants = {
    ghost: {
      background: hover ? 'rgba(62,142,222,0.12)' : 'transparent',
      color: 'var(--jumbo-blue)',
      border: '2px solid transparent'
    },
    outline: {
      background: hover ? 'rgba(62,142,222,0.08)' : 'transparent',
      color: 'var(--tufts-blue)',
      border: '2px solid var(--tufts-blue)'
    },
    solid: {
      background: hover ? '#2f7ac7' : 'var(--tufts-blue)',
      color: '#fff',
      border: '2px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dims,
      height: dims,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: round ? '999px' : 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-base) var(--ease-standard)',
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
const tones = {
  blue: {
    bg: 'rgba(62,142,222,0.14)',
    fg: 'var(--jumbo-blue)'
  },
  deep: {
    bg: 'var(--jumbo-blue)',
    fg: '#fff'
  },
  brown: {
    bg: 'rgba(99,73,58,0.14)',
    fg: 'var(--tufts-brown)'
  },
  green: {
    bg: 'rgba(26,85,50,0.14)',
    fg: 'var(--prez-lawn-green)'
  },
  orange: {
    bg: 'rgba(243,113,33,0.16)',
    fg: '#B24E10'
  },
  red: {
    bg: 'rgba(192,49,26,0.14)',
    fg: 'var(--alert-red)'
  },
  neutral: {
    bg: 'var(--gray-100)',
    fg: 'var(--gray-600)'
  }
};

/** Small status/label pill. */
function Badge({
  children,
  tone = 'blue',
  style = {}
}) {
  const t = tones[tone] || tones.blue;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      padding: '3px 10px',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.6875rem',
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: t.fg,
      background: t.bg,
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Callout.jsx
try { (() => {
const kinds = {
  note: {
    bar: 'var(--tufts-blue)',
    bg: 'rgba(62,142,222,0.07)',
    label: 'Note',
    fg: 'var(--jumbo-blue)'
  },
  tip: {
    bar: 'var(--prez-lawn-green)',
    bg: 'rgba(26,85,50,0.07)',
    label: 'Pro Tip',
    fg: 'var(--prez-lawn-green)'
  },
  warning: {
    bar: 'var(--flame-orange)',
    bg: 'rgba(243,113,33,0.08)',
    label: 'Important',
    fg: '#B24E10'
  },
  danger: {
    bar: 'var(--alert-red)',
    bg: 'rgba(192,49,26,0.07)',
    label: 'Caution',
    fg: 'var(--alert-red)'
  }
};

/**
 * Tutorial callout — the branded equivalent of the Word template's bold "Note:"
 * highlight. Left brand rule + tinted field.
 */
function Callout({
  children,
  kind = 'note',
  title,
  style = {}
}) {
  const k = kinds[kind] || kinds.note;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px',
      borderLeft: `4px solid ${k.bar}`,
      background: k.bg,
      borderRadius: '0 var(--radius-md) var(--radius-md) 0',
      padding: '14px 18px',
      fontFamily: 'var(--font-serif)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: '0.75rem',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: k.fg,
      marginBottom: '4px'
    }
  }, title || k.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.95rem',
      lineHeight: 1.6,
      color: 'var(--bessie-brown)'
    }
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Callout.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Surface container. `accent` adds a top brand rule; `hover` lifts on hover. */
function Card({
  children,
  accent = false,
  hover = false,
  padding = 'var(--space-5)',
  style = {},
  onClick,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderTop: accent ? '4px solid var(--tufts-blue)' : '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: hover && h ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover && h ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base)',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/StepList.jsx
try { (() => {
/**
 * Numbered step list for tutorials — mirrors the Word template's "List Paragraph"
 * numbered steps with Tufts-blue step markers and hanging indent.
 * `steps` is an array of nodes (strings or JSX). `start` sets the first number.
 */
function StepList({
  steps = [],
  start = 1,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      counterReset: `step ${start - 1}`,
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
      ...style
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: '14px',
      alignItems: 'flex-start',
      fontFamily: 'var(--font-serif)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 28,
      height: 28,
      marginTop: 1,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--tufts-blue)',
      color: '#fff',
      borderRadius: '999px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: '0.875rem'
    }
  }, start + i), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: 'var(--bessie-brown)',
      paddingTop: '3px'
    }
  }, s))));
}
Object.assign(__ds_scope, { StepList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StepList.jsx", error: String((e && e.message) || e) }); }

// components/content/Tag.jsx
try { (() => {
/** Filter/category tag; optional dismiss. Softer than Badge, sentence-case. */
function Tag({
  children,
  onRemove,
  active = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '5px 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.8125rem',
      fontWeight: 600,
      color: active ? '#fff' : 'var(--jumbo-blue)',
      background: active ? 'var(--tufts-blue)' : 'var(--white)',
      border: `1.5px solid ${active ? 'var(--tufts-blue)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      display: 'inline-flex',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'inherit',
      padding: 0,
      fontSize: '1rem',
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Checkbox with label. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style = {}
}) {
  const cid = id || `cb-${Math.random().toString(36).slice(2, 8)}`;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-sm)',
      border: `2px solid ${on ? 'var(--tufts-blue)' : 'var(--border-strong)'}`,
      background: on ? 'var(--tufts-blue)' : 'var(--white)',
      transition: 'background var(--dur-fast), border-color var(--dur-fast)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 6.5L4.5 9L10 3",
    stroke: "#fff",
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("input", {
    id: cid,
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.9375rem',
      color: 'var(--bessie-brown)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with label, helper text, and error state. */
function Input({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  defaultValue,
  onChange,
  helper,
  error,
  disabled = false,
  required = false,
  iconLeft = null,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || `in-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error ? 'var(--alert-red)' : focus ? 'var(--tufts-blue)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: '0.8125rem',
      fontWeight: 600,
      color: 'var(--jumbo-blue)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--alert-red)',
      marginLeft: 3
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      display: 'inline-flex',
      color: 'var(--gray-500)'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: iconLeft ? '10px 12px 10px 38px' : '10px 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.9375rem',
      color: 'var(--bessie-brown)',
      background: disabled ? 'var(--gray-50)' : 'var(--white)',
      border: `2px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--dur-base), box-shadow var(--dur-base)'
    }
  }, rest))), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: error ? 'var(--alert-red)' : 'var(--gray-500)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select styled to match Input. */
function Select({
  label,
  id,
  value,
  defaultValue,
  onChange,
  options = [],
  disabled = false,
  helper,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selId = id || `sel-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontSize: '0.8125rem',
      fontWeight: 600,
      color: 'var(--jumbo-blue)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      appearance: 'none',
      padding: '10px 38px 10px 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.9375rem',
      color: 'var(--bessie-brown)',
      background: disabled ? 'var(--gray-50)' : 'var(--white)',
      border: `2px solid ${focus ? 'var(--tufts-blue)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none'
    }
  }, rest), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--gray-500)'
    }
  }, "\u25BE")), helper && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--gray-500)'
    }
  }, helper));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/drone-program-site/Article.jsx
try { (() => {
const React = window.React;
const {
  Button,
  Badge,
  Callout,
  StepList
} = window.TuftsDroneProgramDesignSystem_779650;
function Article({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-warm)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      margin: '0 auto',
      padding: '40px 28px 36px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('library'),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left",
    style: {
      width: 15,
      height: 15
    }
  }), " All tutorials"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      margin: '16px 0 12px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "green"
  }, "Beginner"), /*#__PURE__*/React.createElement(Badge, {
    tone: "blue"
  }, "Flight")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 46,
      lineHeight: 1.05,
      color: 'var(--jumbo-blue)',
      margin: '0 0 12px',
      letterSpacing: '-0.01em'
    }
  }, "Aerial Mapping 101"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontStyle: 'italic',
      fontSize: 14,
      color: 'var(--gray-500)',
      margin: 0
    }
  }, "Created by J. Jumbo \xB7 Last updated Jul 2026 for ArcGIS Pro 3.2 \xB7 25 min read"))), /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: 820,
      margin: '0 auto',
      padding: '44px 28px 72px',
      fontFamily: 'var(--font-serif)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26,
      color: 'var(--jumbo-blue)',
      borderLeft: '4px solid var(--tufts-blue)',
      paddingLeft: 14,
      margin: '0 0 12px'
    }
  }, "Tutorial Introduction"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.65,
      color: 'var(--bessie-brown)',
      margin: '0 0 20px'
    }
  }, "This tutorial will lead you through planning your first mapping mission \u2014 choosing a grid pattern, setting the right overlap, and capturing clean nadir imagery you can later stitch into an orthomosaic. You will learn ", /*#__PURE__*/React.createElement("b", null, "why"), " each setting matters, not just where to tap."), /*#__PURE__*/React.createElement(Callout, {
    kind: "note"
  }, "Save every file for this project in one consistent location \u2014 your Tufts H: drive or Tufts Box. Stay consistent and remember where it is."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26,
      color: 'var(--jumbo-blue)',
      borderLeft: '4px solid var(--tufts-blue)',
      paddingLeft: 14,
      margin: '32px 0 12px'
    }
  }, "Getting Started"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.65,
      color: 'var(--bessie-brown)',
      margin: '0 0 20px'
    }
  }, "Before you fly, confirm the airspace is clear and your batteries are charged. Then set up the mission in the controller app."), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 0 24px'
    }
  }, /*#__PURE__*/React.createElement(StepList, {
    steps: [/*#__PURE__*/React.createElement(React.Fragment, null, "Open the ", /*#__PURE__*/React.createElement("b", null, "controller app"), " and create a new ", /*#__PURE__*/React.createElement("b", null, "Mapping Mission"), "."), /*#__PURE__*/React.createElement(React.Fragment, null, "Draw your survey boundary, then set ", /*#__PURE__*/React.createElement("b", null, "front overlap"), " to 75% and ", /*#__PURE__*/React.createElement("b", null, "side overlap"), " to 65%."), /*#__PURE__*/React.createElement(React.Fragment, null, "Set altitude for your target resolution \u2014 roughly ", /*#__PURE__*/React.createElement("b", null, "2 cm/px"), " at 55 m."), /*#__PURE__*/React.createElement(React.Fragment, null, "Run the automated pre-flight check, then tap ", /*#__PURE__*/React.createElement("b", null, "Start"), " and keep the aircraft in sight.")]
  })), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: '0 0 24px',
      border: '1px solid var(--border-default)',
      borderRadius: 10,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16/8',
      background: 'repeating-linear-gradient(45deg,var(--gray-100),var(--gray-100) 14px,var(--gray-50) 14px,var(--gray-50) 28px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--gray-500)'
    }
  }, "Screenshot: the mission grid over the survey area")), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--gray-500)',
      padding: '9px 14px',
      background: 'var(--surface-warm)'
    }
  }, "Figure 1. A lawn-mower grid with 75/65% overlap.")), /*#__PURE__*/React.createElement(Callout, {
    kind: "warning"
  }, "Never fly beyond visual line of sight without a Part 107 waiver. Keep a visual observer if you are also operating the camera."), /*#__PURE__*/React.createElement(Callout, {
    kind: "tip"
  }, "Fly on an overcast day when you can \u2014 flat light means fewer harsh shadows and a cleaner orthomosaic."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 40,
      paddingTop: 24,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => go('library')
  }, "\u2190 Back to library"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go('article')
  }, "Next: Building an Orthomosaic \u2192"))));
}
Object.assign(window, {
  Article
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/drone-program-site/Article.jsx", error: String((e && e.message) || e) }); }

// ui_kits/drone-program-site/Home.jsx
try { (() => {
const React = window.React;
const {
  Button,
  Badge,
  Card
} = window.TuftsDroneProgramDesignSystem_779650;
function Home({
  go
}) {
  const stats = [['12', 'Tutorials'], ['4', 'Drones in fleet'], ['38', 'Active members'], ['1.2k', 'Acres mapped']];
  const feature = [{
    t: 'Plan a mission',
    d: 'Grid patterns, overlap, and altitude for clean orthomosaics.',
    i: 'map',
    tone: 'blue'
  }, {
    t: 'Process imagery',
    d: 'From raw JPEGs to a georeferenced orthomosaic in Pix4D.',
    i: 'layers',
    tone: 'orange'
  }, {
    t: 'Map it in GIS',
    d: 'Bring results into ArcGIS Pro and build a thematic layout.',
    i: 'globe',
    tone: 'green'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'linear-gradient(180deg, var(--jumbo-blue), #013e8f)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '72px 28px 80px',
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--aurora-green)'
    }
  }, "Tufts University Data Lab"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 60,
      lineHeight: 1.02,
      letterSpacing: '-0.02em',
      margin: '14px 0 18px'
    }
  }, "See the ground from a new altitude."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 19,
      lineHeight: 1.55,
      color: 'rgba(255,255,255,0.9)',
      maxWidth: 520
    }
  }, "Learn to fly, capture, and map with the Tufts Drone Program \u2014 hands-on tutorials in photogrammetry and GIS, built for every skill level."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "onbrand",
    size: "lg",
    onClick: () => go('library')
  }, "Browse tutorials"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {
      color: '#fff'
    },
    onClick: () => go('fleet')
  }, "Meet the fleet \u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: '0 20px 50px rgba(0,0,0,0.35)',
      border: '3px solid rgba(255,255,255,0.15)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/3',
      background: 'linear-gradient(135deg,#98D5C7,#3E8EDE 60%,#002E6D)',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'rgba(255,255,255,0.9)',
      background: 'rgba(0,0,0,0.25)',
      padding: '5px 10px',
      borderRadius: 6
    }
  }, "Orthomosaic \xB7 Medford campus \xB7 2cm/px"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-warm)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '26px 28px',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 20
    }
  }, stats.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 34,
      color: 'var(--tufts-blue)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--gray-500)'
    }
  }, l))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '64px 28px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 36,
      color: 'var(--jumbo-blue)',
      textAlign: 'center',
      margin: '0 0 10px'
    }
  }, "From takeoff to thematic map"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      color: 'var(--gray-600)',
      textAlign: 'center',
      maxWidth: 560,
      margin: '0 auto 44px'
    }
  }, "Three stages, one workflow. Every tutorial fits somewhere on this path."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, feature.map(f => /*#__PURE__*/React.createElement(Card, {
    key: f.t,
    accent: true,
    hover: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(62,142,222,0.12)',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": f.i,
    style: {
      width: 24,
      height: 24,
      color: 'var(--tufts-blue)'
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--jumbo-blue)',
      margin: '0 0 6px'
    }
  }, f.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--bessie-brown)',
      margin: 0
    }
  }, f.d))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--tufts-blue)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '52px 28px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 32,
      margin: '0 0 6px'
    }
  }, "Ready for your first flight?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      margin: 0,
      color: 'rgba(255,255,255,0.92)'
    }
  }, "Start with Aerial Mapping 101 \u2014 no experience required.")), /*#__PURE__*/React.createElement(Button, {
    variant: "onbrand",
    size: "lg",
    onClick: () => go('article')
  }, "Open the tutorial"))));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/drone-program-site/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/drone-program-site/Library.jsx
try { (() => {
const React = window.React;
const {
  Card,
  Badge,
  Tag,
  Input
} = window.TuftsDroneProgramDesignSystem_779650;
const TUTORIALS = [{
  t: 'Aerial Mapping 101',
  d: 'Plan a grid mission, capture nadir imagery, and understand overlap.',
  level: 'Beginner',
  tag: 'Flight',
  mins: 25,
  tone: 'blue'
}, {
  t: 'Building an Orthomosaic in Pix4D',
  d: 'Turn raw JPEGs into a georeferenced orthomosaic.',
  level: 'Beginner',
  tag: 'Processing',
  mins: 40,
  tone: 'orange'
}, {
  t: 'Thematic Maps in ArcGIS Pro',
  d: 'Symbolize categorical and quantitative data, then lay out a map.',
  level: 'Intermediate',
  tag: 'GIS',
  mins: 55,
  tone: 'green'
}, {
  t: 'Setting a Map-Frame Projection',
  d: 'Choose and apply the right coordinate system for your region.',
  level: 'Intermediate',
  tag: 'GIS',
  mins: 20,
  tone: 'green'
}, {
  t: 'LiDAR Point Clouds',
  d: 'Classify returns and generate a bare-earth DEM.',
  level: 'Advanced',
  tag: 'Processing',
  mins: 60,
  tone: 'orange'
}, {
  t: 'Flight Safety & FAA Part 107',
  d: 'Airspace, waivers, and the pre-flight checklist.',
  level: 'Beginner',
  tag: 'Safety',
  mins: 30,
  tone: 'red'
}];
function Library({
  go
}) {
  const [filter, setFilter] = React.useState('All');
  const cats = ['All', 'Flight', 'Processing', 'GIS', 'Safety'];
  const list = filter === 'All' ? TUTORIALS : TUTORIALS.filter(x => x.tag === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '52px 28px 72px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--tufts-blue)'
    }
  }, "Tutorial Library"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 44,
      color: 'var(--jumbo-blue)',
      margin: '10px 0 8px'
    }
  }, "Learn the whole workflow"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      color: 'var(--gray-600)',
      maxWidth: 620,
      margin: '0 0 28px'
    }
  }, "Step-by-step guides written to the Tufts Data Lab standard \u2014 bold action items, plenty of screenshots, and a clear reason for every step."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      marginBottom: 28,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    active: filter === c,
    onRemove: undefined,
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setFilter(c)
  }, c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      minWidth: 240
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search tutorials\u2026",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "search",
      style: {
        width: 16,
        height: 16
      }
    })
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 22
    }
  }, list.map(x => /*#__PURE__*/React.createElement(Card, {
    key: x.t,
    hover: true,
    onClick: () => go('article'),
    style: {
      display: 'flex',
      flexDirection: 'column',
      padding: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16/9',
      background: x.tone === 'blue' ? 'linear-gradient(135deg,#3E8EDE,#002E6D)' : x.tone === 'orange' ? 'linear-gradient(135deg,#FFC72C,#F37121)' : x.tone === 'green' ? 'linear-gradient(135deg,#98D5C7,#1A5532)' : 'linear-gradient(135deg,#C0311A,#63493A)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: x.level === 'Beginner' ? 'green' : x.level === 'Intermediate' ? 'blue' : 'brown'
  }, x.level), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, x.tag)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      color: 'var(--jumbo-blue)',
      margin: '0 0 6px'
    }
  }, x.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 14.5,
      lineHeight: 1.5,
      color: 'var(--bessie-brown)',
      margin: '0 0 14px',
      flex: 1
    }
  }, x.d), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--gray-500)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "clock",
    style: {
      width: 14,
      height: 14
    }
  }), " ", x.mins, " min read"))))));
}
Object.assign(window, {
  Library
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/drone-program-site/Library.jsx", error: String((e && e.message) || e) }); }

// ui_kits/drone-program-site/Nav.jsx
try { (() => {
const React = window.React;
const {
  Button
} = window.TuftsDroneProgramDesignSystem_779650;
function SiteHeader({
  route,
  go
}) {
  const links = [['home', 'Home'], ['library', 'Tutorials'], ['fleet', 'Fleet'], ['about', 'About']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'var(--jumbo-blue)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '0 28px',
      height: 68,
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    alt: "Jumbo",
    style: {
      height: 38,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/wordmark-white.png",
    alt: "Tufts University",
    style: {
      height: 26,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--aurora-green)',
      borderLeft: '1px solid rgba(255,255,255,0.35)',
      paddingLeft: 12
    }
  }, "Drone Program")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4,
      marginLeft: 'auto'
    }
  }, links.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => go(id),
    style: {
      padding: '8px 14px',
      borderRadius: 8,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 14,
      color: route === id ? 'var(--jumbo-blue)' : 'rgba(255,255,255,0.85)',
      background: route === id ? '#fff' : 'transparent'
    }
  }, label))), /*#__PURE__*/React.createElement(Button, {
    variant: "onbrand",
    size: "sm",
    onClick: () => go('library')
  }, "Start learning")));
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--bessie-brown)',
      color: 'rgba(255,255,255,0.75)',
      marginTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '40px 28px',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 24,
      fontFamily: 'var(--font-sans)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/wordmark-white.png",
    alt: "Tufts University",
    style: {
      height: 30,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--aurora-green)'
    }
  }, "Drone Program")), /*#__PURE__*/React.createElement("p", {
    style: {
      lineHeight: 1.6,
      marginTop: 8
    }
  }, "A student-led initiative in the Tufts University Data Lab exploring aerial mapping, photogrammetry, and GIS.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontWeight: 700,
      marginBottom: 8
    }
  }, "Learn"), "Tutorials", /*#__PURE__*/React.createElement("br", null), "Flight logs", /*#__PURE__*/React.createElement("br", null), "Data downloads"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontWeight: 700,
      marginBottom: 8
    }
  }, "Program"), "Join us", /*#__PURE__*/React.createElement("br", null), "Safety policy", /*#__PURE__*/React.createElement("br", null), "Contact"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.15)',
      padding: '16px 28px',
      textAlign: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 12
    }
  }, "\xA9 Tufts University 2026 \xB7 196 Boston Ave, Medford MA"));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/drone-program-site/Nav.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StepList = __ds_scope.StepList;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();

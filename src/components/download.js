import React, { useState, useEffect } from 'react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { Button, Input, Select, Tooltip, Checkbox } from 'antd';
import { FileTextTwoTone, DownloadOutlined, SettingOutlined, InfoCircleOutlined, EyeOutlined } from '@ant-design/icons';
import ReactGA from 'react-ga';

export default () => {
  const [fieldValues, setFieldValues] = useState({
    type: 'swagger',
    version: 2,
    inputType: 'json',
    isBackToTopButton: true,
    isCoding: true,
    isSearch: true,
    isTryRequest: true,
    isCreditLink: true,
    theme: 'compact',
  });

  const [isAdvance, setIsAdvance] = useState(false);
  const [childWindow, setChildWindow] = useState(null);

  let fields = [
    {
      name: 'url',
      label: 'Source Url',
      type: 'text',
      icon: <FileTextTwoTone />,
      style: {maxWidth: '100%'},
    },
    {
      name: 'type',
      label: 'Type',
      type: 'select',
      style: {maxWidth: 'calc(50% - 5px)'},
      options: [['swagger', 'Swagger'], ['openapi', 'OpenAPI'], ['api_blueprint', 'API Blueprint'], ['io_docs', 'IO Docs'], ['google', 'Google API Descory'], ['raml', 'RAML'], ['wadl', 'WADL'] ],
    },
    {
      name: 'version',
      label: 'Version',
      type: 'select',
      style: {maxWidth: 'calc(50% - 5px)'},
      options: [[1], [2], [3]],
      swagger: true,
    },
    {
      name: 'inputType',
      label: 'Source Encoding',
      type: 'select',
      style: {maxWidth: 'calc(50% - 5px)'},
      options: [['json'], ['yaml']],
      swagger: true,
    },
    {
      name: 'theme',
      label: 'Theme',
      type: 'select',
      style: {maxWidth: 'calc(50% - 5px)'},
      options: [['compact', 'Compact'], ['basic', 'Basic']],
    },
    {
      name: 'logo',
      type: 'text',
      label: 'Logo Url / Local Logo Name',
      style: {maxWidth: '100%'},
      tooltip: (
      <>
        <b>Local logo name</b> only works with the <b>Download</b> action, not with the <b>Preview</b> action.<br /> After downloading the <b>HTML</b> file, the logo file should be placed in the same folder, the path of local logo file should be relative to the <b>HTML</b> file.
      </>
      )
    },
    {
      name: 'baseColor',
      type: 'text',
      label: 'Base Color (RGB, Hexa or Color Name)',
      style: {maxWidth: 'calc(50% - 5px)'}
    },
    {
      name: 'textColor',
      type: 'text',
      label: 'Text Color (RGB, Hexa or Color Name)',
      style: {maxWidth: 'calc(50% - 5px)'} 
    },
    {
      name: 'pageTitle',
      type: 'text',
      label: 'Page Title',
      style: {maxWidth: '100%'},
      advance: true,
    },
    {
      name: 'pageTags',
      type: 'text',
      label: 'Page Meta Keywords',
      style: {maxWidth: '100%'},
      tooltip: 'Each keyword should be seperated by a comma. Meta Keywords are helpful for the SEO.',
      advance: true,
    },
    {
      name: 'pageDescription',
      type: 'textarea',
      label: 'Page Meta Description',
      advance: true,
    },
    {
      name: 'isBackToTopButton',
      type: 'checkbox',
      label: <><b>Back to top</b> button</>,
      style: {width: '100%'},
      value: true,
      advance: true,
    },
    {
      name: 'isCoding',
      type: 'checkbox',
      label: <><b>Coding</b> Section</>,
      style: {width: '100%'},
      advance: true,
    },
    {
      name: 'isSearch',
      type: 'checkbox',
      label: <><b>Search</b> Feature</>,
      style: {width: '100%'},
      advance: true,
    },
    {
      name: 'isTryRequest',
      type: 'checkbox',
      label: <><b>Try Request</b> feature</>,
      style: {width: '100%'},
      advance: true,
    },
    {
      name: 'isCreditLink',
      type: 'checkbox',
      label: <><b>Credit</b> link{fieldValues.isCreditLink ? '':<span>. Please <a href="http://paypal.me/asfanddev" target="_blank">donate</a> to support the project.</span>}</>,
      style: {width: '100%'},
      advance: true,
    },
    {
      name: 'customHeadScript',
      type: 'textarea',
      label: 'Custom Head Script, will be added to the head tag after all other scripts',
      style: {maxWidth: '100%'},
      advance: true,
    },
    {
      name: 'customFootScript',
      type: 'textarea',
      label: 'Custom Foot Script, will be added before ending tag of body.',
      style: {maxWidth: '100%'},
      advance: true,
    },
    {
      name: 'apiVersions',
      type: 'textarea',
      label: 'API Versions, enter in the following format:\n(Name)[URL]\n(Name)[URL]\n...\nExp:\n(V1)[https://zamacall.io/docs/v1/]\n(V2)[https://zamacall.io/docs/v2/]',
      style: {maxWidth: '100%'},
      rows: 8,
      advance: true,
    },
    {
      name: 'headerMenuItems',
      type: 'textarea',
      label: 'Header Menu Items, enter in the following format:\n(Name)[URL]\n(Name)[URL]\n...\nExp:\n(Main Website)[https://zamacall.io]\n(Contact Us)[https://zamacall.io/contact/]',
      style: {maxWidth: '100%'},
      rows: 8,
      advance: true,
    },
  ];

  useEffect(() => {
    const handler = (event) => {
      const { eventType, value } = event.data;
      if (eventType === 'customFootScript') {
        setFieldValue('customFootScript', value);
      } else if (eventType === 'download') {
        const url = getUrlWithQuery({ isDownload: true });
        childWindow.postMessage({ eventType: 'download', value: url }, '*'); 
      } else if (eventType === 'preview') {
        const url = getUrlWithQuery();
        childWindow.postMessage({ eventType, value: url }, '*');
      }
    }

    window.addEventListener("message", handler)

    // clean up
    return () => window.removeEventListener("message", handler);
  }, [childWindow, fieldValues]);

  const setFieldValue = (name, value) => {
    setFieldValues(e => ({ ...e, [name]: value }));
  }

  const objToQuery = (obj) => (
    Object.keys(obj).map(key => obj[key] ? `${key}=${encodeURIComponent(obj[key])}` : '').filter(e => e).join('&')
  );

  const getQuery = (isEditor = false) => {
    const { 
      url,
      type,
      version,
      inputType,
      ...options
    } = fieldValues;

    const values = { url, type };

    if (type === 'swagger' || type === 'openapi') {
      if (inputType === 'yaml') {
        values.yaml = true;
      }

      if (version) { 
        values.version = version || 2;
      }
    }

    if (isEditor) {
      options.editor = true;
    }

    if (options) {
      values.options = JSON.stringify(options);
    }

    return objToQuery(values);
  };

  const getUrlWithQuery = (props = {}) => {
    const { isEditor = false, isDownload = false } = props;
    const query = getQuery(isEditor);

    return `https://asfand.dev/api-html/generate-html?${query}${isDownload ? '&download=1' : ''}`
  }

  const previewHandler = () => {
    if (!fieldValues.url) return alert('Please enter a correct Source URL');

    const url = getUrlWithQuery();
    window.open(url, '_blank');

    if (process.env.NODE_ENV === 'production') {
      ReactGA.pageview(url);
    }
  }

  const downloadHandler = () => {
    if (!fieldValues.url) return alert('Please enter a correct Source URL');

    const url = getUrlWithQuery({ isDownload: true });
    window.open(url, '_blank');

    if (process.env.NODE_ENV === 'production') {
      ReactGA.pageview(url);
    }
  }

  const customizeTheme = () => {
    if (!fieldValues.url) return alert('Please enter a correct Source URL');
    const url = getUrlWithQuery({ isEditor: true });
    setChildWindow(window.open(url, '_blank', 'width=1200,menubar=no,toolbar=no,location=no,resizable=yes,scrollbars=yes,status=no'));

    if (process.env.NODE_ENV === 'production') {
      ReactGA.pageview(url);
    }
  }

  const importOptionsHandler = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.onchange = () => {
      const file = fileInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsText(file, "UTF-8");

        reader.onload = (e = {}) => {
          const { target = {} } = e;
          const { result = {} } = target;
          try {
            const values = JSON.parse(result);
            setFieldValues(values);
          } catch (e) {}
        }

        reader.onerror = (evt) => {
          alert('Error importing file!');
        }
      }
    }
    fileInput.click();
  }

  const exportOptionsHandler = () => {
    const a = document.createElement('a');
    a.download = "api-html.json";
    a.target = '_blank';
    a.href = `data:application/json;base64,${btoa(JSON.stringify(fieldValues, null, 4))}`;
    a.click();
  }

  if (fieldValues.type !== 'swagger') {
    fields = fields.filter(({ swagger = false }) => !swagger);
  }

  if (!isAdvance) {
    fields = fields.filter(({ advance = false }) => !advance);
  }

  const { theme = '' } = fieldValues;

  return (
    <div className="home-page download-section">
      <div className="home-page-wrapper">
        <div className="title-line-wrapper page2-line">
          <div className="title-line" />
        </div>
        <h2>Preview or <span>Download</span></h2>
        <OverPack>
          <QueueAnim key="queue" type="bottom" leaveReverse className="zama-section">
            <div key="button" style={{marginTop: 20}}>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 5 }}>
                <span style={{ color: '#1891ff', cursor: 'pointer' }} onClick={importOptionsHandler}>Import</span>
                <span style={{ padding: '0 10px' }}>|</span>
                <span style={{ color: '#1891ff', cursor: 'pointer' }} onClick={exportOptionsHandler}>Export</span>
              </div>
              <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', maxWidth: 800}}>
                {fields.map(({ name, type, icon, label, tooltip, style, options = [], rows = 5 }) => (
                  type === 'text' ? (
                    <Input
                      key={name}
                      size="large"
                      value={fieldValues[name] || ''}
                      onChange={e => setFieldValue(name, e.target.value)}
                      placeholder={label}
                      prefix={icon}
                      style={{marginTop: 10, ...style}}
                      suffix={tooltip ? (
                        <Tooltip title={tooltip}>
                          <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                        ): (
                          null
                        )
                      }
                    />
                  ) : type === 'select' ? (
                    <Select
                      onChange={value => setFieldValue(name, value)}
                      size="large"
                      key={name}
                      placeholder={label}
                      style={{marginTop: 10, width: '100%', ...style}}
                      value={fieldValues[name] || ''}
                    >
                      <Select.Option key="default" value="">Select {label}</Select.Option>
                      {options.map(([name, value]) => <Select.Option key={name} value={name}>{value || name}</Select.Option>)}
                    </Select>
                  ) : type === 'textarea' ? (
                    <Input.TextArea
                      key={name}
                      size="large"
                      onChange={e => setFieldValue(name, e.target.value)}
                      placeholder={label}
                      style={{marginTop: 10, ...style}}
                      rows={rows}
                      value={fieldValues[name]}
                    />
                  ) : (
                    <Checkbox
                      key={name}
                      size="large"
                      onChange={e => setFieldValue(name, e.target.checked)}
                      checked={fieldValues[name] || false}
                      style={{marginTop: 10, ...style}}
                    >{label}</Checkbox>
                  )
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 5 }}>
                {/* {theme === 'compact' && (
                  <>
                    <span style={{ color: '#1891ff', cursor: 'pointer' }} onClick={customizeTheme}>
                      <Tooltip title={
                        <>
                          <h3 style={{color: 'white'}}>Attention!</h3>
                          <b>Single Click</b> = <b>Text Edit</b><br />
                          <b>Double Click</b> = <b>UI Customization</b><br />
                          A new window will be open, where you can customize the UI or edit the text.<br />
                          The changes will be converted to <b>CSS & JavaScript</b> and will be added to the <b>Custom Foot Script</b> field in the <b>Advance Options</b>. You can also <b>export</b> the change for later use by using our export functionality.<br />
                          Once you are done with the changes, Hover over the <b><SettingOutlined /> Settings</b> in the <b>editor</b> window, where you can <b>download</b> or <b>preview</b>.
                        </>
                      }>Preview & Customize</Tooltip>  
                    </span>
                    <span style={{ padding: '0 10px' }}>|</span>
                  </> 
                )} */}
                <span
                  style={{ color: '#1891ff', cursor: 'pointer' }}
                  onClick={() => setIsAdvance(!isAdvance)}
                >
                  Advance Options {isAdvance ? '-' : '+'}
                </span>
              </div>
              <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button icon={<EyeOutlined />} onClick={previewHandler} style={{ margin: '0 16px' }} type="primary" ghost>
                  Preview
                </Button>
                <Button icon={<DownloadOutlined />} onClick={downloadHandler} type="primary">
                  Download
                </Button>
              </div>
            </div>
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
};

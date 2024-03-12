/* tab_menu.jsx - TabMenu component */

/* Copyright (c) 2020 - present Tikkl, Inc. */
/*
modification history
--------------------
01f,08sep21,bks  added data-testId and data-type.
01e,27oct21,dpr  added support for custom id attr, setter.
01d,17oct21,dpr  support for disabled tab.
01c,06aug21,dpr  cleanup, added tab type
01b,18jun21,mno  cleanup.
                 styles update.
01a,16sep20,bks  created.
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { find, isNil, propEq } from 'ramda';

import { isEmpty } from './lib/isEmpty';

class TabMenu extends PureComponent {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);

    this.state = {
      activeTab: props.activeTab || (props.tabs[0] && props.tabs[0][props.dataIdKey])
    };
  }

  // FIXME: setState reeks.
  componentDidUpdate(prevProps){
    const { activeTab } = this.props;
    const { activeTab: tabState } = this.state;

    if (prevProps.activeTab !== activeTab && !!activeTab && activeTab !== tabState){
      this.setState({ activeTab });
    }
  }

  onClick(e){
    const { onClick, tabs, dataIdKey } = this.props;
    e.persist();
    e.stopPropagation();
    e.preventDefault();

    const tabName = e.currentTarget.name;
    const tab = find(propEq(dataIdKey, tabName), tabs);

    if (!tab || tab.disabled) return;

    this.setState({ activeTab: tabName });
    onClick && onClick(e);
  }

  /**
   * @param {String} tabName
   */
  set tab(tabName){
    const { tabs, dataIdKey } = this.props;

    const tab = find(propEq(dataIdKey, tabName), tabs);

    if (!tab || tab.disabled) return false;

    this.setState({ activeTab: tabName });
    return true;
  }

  renderScreens(){
    const { tabs, dataIdKey } = this.props;
    const { activeTab } = this.state;

    return (find(propEq(dataIdKey, activeTab), tabs)?.screen || null);
  }

  render(){
    const {
      tabs, className, tabLabelKey, dataIdKey
    } = this.props;
    const { activeTab } = this.state;

    if (!(tabs)) return null;

    return (
      <>
        <div className={classnames('tabs', className)}>
          <ul>
            {tabs.map((tab) => (
              <li
                className={classnames('tab item', {
                  'is-active': activeTab === tab[dataIdKey],
                  disabled:    tab.disabled,
                })}
                key={tab[dataIdKey]}
                data-testid={tab[dataIdKey].type}
                data-type={tab[dataIdKey].type}
              >
                { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                <a
                  href="#"
                  name={tab[dataIdKey]}
                  data-id={tab.id}
                  data-type={tab.type}
                  className="has-text-weight-semibold"
                  onClick={this.onClick}
                >
                  {tab[tabLabelKey]}
                  {!isNil(tab.tag) && (
                    <span className="tag">{tab.tag}</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {this.renderScreens()}
      </>
    );
  }
}

export default TabMenu;

TabMenu.propTypes = {
  tabs:        PropTypes.arrayOf(PropTypes.shape({
    type:   PropTypes.string.isRequired,
    label:  PropTypes.string,
    screen: PropTypes.element,
    tag:    PropTypes.string,
  })).isRequired,
  tabLabelKey: PropTypes.string,
  dataIdKey:   PropTypes.string,
  onClick:     PropTypes.func,
  activeTab:   PropTypes.string,
};

TabMenu.defaultProps = {
  tabLabelKey: 'label',
  dataIdKey:   'type',
  onClick:     undefined,
  activeTab:   undefined,
};

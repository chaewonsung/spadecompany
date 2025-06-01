import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Tree.module';
import { IconMinus, IconPlus } from './Icons';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const Tree = ({ treeData }) => {
  return (
    <ul className={styles.tree} role="tree">
      {treeData.map((node) => (
        <TreeNode key={node.key} node={node} />
      ))}
    </ul>
  );
};

const TreeNode = ({ node, depth = 1, parentExpand = true }) => {
  const [expand, setExpand] = useState(false);
  const hasChildren = node.children && node.children.length > 0;
  const Icon = expand ? IconMinus : IconPlus;

  const nodeProps = {
    role: 'none',
    className: styles.treeNode,
    ['aria-level']: depth,
  };

  const titleProps = {
    role: 'treeitem',
    className: styles.treeTitle,
    style: { '--depth': depth },
  };

  useEffect(() => {
    if (!parentExpand && expand) setExpand(false);
  }, [parentExpand, expand]);

  return hasChildren ? (
    <li {...nodeProps} aria-expanded={expand}>
      <button {...titleProps} onClick={() => setExpand((prev) => !prev)}>
        {node.title}
        <Icon />
      </button>
      <div className={cn('listWrapper', { expand })}>
        <ul role="group">
          {node.children.map((child) => (
            <TreeNode
              key={child.key}
              node={child}
              depth={depth + 1}
              parentExpand={expand}
            />
          ))}
        </ul>
      </div>
    </li>
  ) : (
    <li {...nodeProps}>
      <NavLink {...titleProps} to={node.path}>
        {node.title}
      </NavLink>
    </li>
  );
};

export default Tree;

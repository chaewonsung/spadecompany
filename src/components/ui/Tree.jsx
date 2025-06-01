import React, { useCallback, useEffect, useState } from 'react';
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
  const handleToggle = useCallback((e) => {
    e.stopPropagation();
    setExpand((prev) => !prev);
  }, []);

  useEffect(() => {
    if (!parentExpand && expand) setExpand(false);
  }, [parentExpand, expand]);

  return (
    <li role="none" className={styles.treeNode}>
      <div className={styles.treeTitle}>
        <NavLink
          role="treeitem"
          className={styles.link}
          style={{ '--depth': depth }}
          aria-level={depth}
          to={node.path}
        >
          {node.title}
        </NavLink>
        {hasChildren && (
          <button
            className={styles.toggleBtn}
            aria-expanded={expand}
            onClick={handleToggle}
          >
            <Icon />
          </button>
        )}
      </div>
      {hasChildren && (
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
      )}
    </li>
  );
};

export default Tree;

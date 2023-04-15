import s from './ContentHeader.module.css';

const ContentHeader = ({ title, children }) => {
  return (
    <>
      <div>
        <h1 className={s.title}>{title}</h1>
        {children}
      </div>
    </>
  );
};

export default ContentHeader;

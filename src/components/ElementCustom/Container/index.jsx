const Container = ({ children, className = '' }) => {
    return (
        <div
            className={`mx-auto px-3 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] ${className}`}
        >
            {children}
        </div>
    );
};

export default Container;

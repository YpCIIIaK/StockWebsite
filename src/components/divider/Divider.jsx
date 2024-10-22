import React from 'react';

const Divider = ({ orientation = 'horizontal', thickness = '1px', color = 'gray', height = '100%', opacity = 1 }) => {
    const baseStyles = {
        backgroundColor: color,
        opacity: opacity,
        ...(orientation === 'horizontal'
            ? { height: thickness, width: '100%' }
            : { width: thickness, height: height }),
    };

    return <div style={baseStyles} />;
};

export default Divider;
// Три точки перед условием в коде обозначают оператор распаковки (spread operator) в JavaScript. Этот оператор
// используется для расширения (распаковки) объектов или массивов.
// Как работает оператор распаковки
// В контексте объекта, как в нашем коде, он позволяет создать новый объект, который включает свойства другого объекта
// или добавляет дополнительные свойства.
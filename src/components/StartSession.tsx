import React from 'react'
import Button from '@lyyti/design-system/components/Button';

interface IProps {
    vexlink: string
}

const StartSession: React.FC<IProps> = ({ vexlink }) => {
    return (
        <div>
            <Button
                type="button"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href=vexlink;
                }}
            > Start Session </Button>
        </div>
    )
}

export default StartSession
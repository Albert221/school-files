import React from 'react';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import File from '../components/file/File';

class FilesPage extends React.Component {
    state = {
        files: [
            {
                name: 'System komputerowy',
                description: 'Podstawy na pierwsze lekcje',
                filename: 'so_1.pdf',
                size: '89kB',
                downloaded: 153,
            },
            {
                name: 'Kernel linuxa',
                description: '',
                filename: 'so_2.pdf',
                size: '43kB',
                downloaded: 328
            },
            {
                name: 'Techno wixa na systemy',
                description: 'Dobre nuty w sam raz na uczenie się na systemy',
                filename: 'TECHNO_W1X4.mp3',
                size: '16MB',
                downloaded: 2213
            }
        ]
    };

    render() {
        const { files } = this.state;
        const { id } = this.props.match.params;

        return (
            <div>
                <PageHeader title={`Lista plików o id ${id}`}>
                    <Button href={`/class/${id}/add`} text="Dodaj plik" action />
                </PageHeader>
                {files.map((file, i) =>
                    <File name={file.name} description={file.description} filename={file.filename}
                        size={file.size} downloaded={file.downloaded} key={i} />
                )}
            </div>
        );
    }
}

export default FilesPage;
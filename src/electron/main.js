const {app, BrowserWindow,globalShortcut,Menu, MenuItem} = require('electron')


app.whenReady().then(() => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            webSecurity: false
        }
    })

    const menu = new Menu()
    menu.append(new MenuItem({
        label: 'Web',
        submenu: [{
            role: 'GoBack',
            label:'GoBack',
            accelerator: 'Backspace',
            click: () => {
                win.webContents.goBack()
            }
        }]
    }))

    Menu.setApplicationMenu(menu)
    win.maximize()
    win.menuBarVisible = false
    win.minimizable = false



        win.loadURL('http://localhost:3000/')


    const ret = globalShortcut.register('CommandOrControl+d+h', () => {

        if (win.isMinimized()){
            win.maximize()
        }else {
            win.focus()
        }
    })

    if (!ret) {
        console.log('registration failed')
    }

    // Check whether a shortcut is registered.
    console.log(globalShortcut.isRegistered('CommandOrControl+X'))


})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

const {app, BrowserWindow,globalShortcut,Menu, MenuItem} = require('electron')
const isDev = require('electron-is-dev');



app.whenReady().then(() => {
    const win = new BrowserWindow({width: 800, height: 600 })

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

    if (isDev) {
        win.loadURL('http://localhost:3000/search?q=Cannot%20create%20an%20instance%20of%20class%20ViewModel&page=1')
    } else {
        win.loadFile(__dirname+'index.html/search?q=Cannot%20create%20an%20instance%20of%20class%20ViewModel&page=1')
    }

    const ret = globalShortcut.register('CommandOrControl+s+h', () => {

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




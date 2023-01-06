yarn start
```

---

### **Packaging for Production**

To package apps into a local executable:

- Personalize the forge **maker** configs at `/.config/forge.config.js`

```sh
yarn make:win
# yarn make:mac
# yarn make:linux
```

---

### **Releasing with GitHub**

1. Copy the contents of `env.example` to `.env` (Copy into a blank one if you dont already have one)
2. Set your `GH_TOKEN`
3. Personalize the forge **publisher** configs at `/.config/forge.config.js`

```sh
yarn publish:win
# yarn publish:mac
# yarn publish:linux
```

---

### **Platform-Specifc Icon Generation**

1. Ensure that you have a high quality `source.png` icon in your `/assets/package` folder
2. Run:

```sh
yarn create-icons
```



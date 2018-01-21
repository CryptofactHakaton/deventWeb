module.exports = function(db) {
    return {
        create: function(event) {
            return new Promise((resolve, reject) => {
                db.one(
                    'INSERT INTO events_tab (name, short_desc, long_desc,evnt_date,location,phone,city,owner_name,owner_mail,softcap,hardcap,price,end_sale_date,contract_adr) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING evnt_id',
                    [event.name, event.short_desc, event.long_desc, event.evnt_date, event.location, event.phone, event.city, event.owner_name, event.owner_mail, event.softcap, event.hardcap, event.price, event.end_sale_date, event.contract_adr ]
                )
                    .then(row => {
                        resolve(row.evnt_id)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        get: function(id) {
            return db.one('SELECT * FROM events_tab WHERE evnt_id = $1', [id])
        },
        all: function() {
            return db.any('SELECT * FROM events_tab')
        },
        add_buyer: function (buyer) {
            return db.one(
                'INSERT INTO tickets_tab (evnt_id, mail, eth_adr) VALUES ($1, $2, $3)', [buyer.evnt_id, buyer.mail, buyer.eth_adr ]
            )
        }
    }
}

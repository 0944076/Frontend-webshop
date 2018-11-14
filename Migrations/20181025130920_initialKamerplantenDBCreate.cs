using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace kamerplantModel.Migrations
{
    public partial class initialKamerplantenDBCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "bestelling",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    klantID = table.Column<int>(nullable: false),
                    prijs = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_bestelling", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "categorie",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    naam = table.Column<string>(nullable: true),
                    beschrijving = table.Column<string>(nullable: true),
                    foto = table.Column<string>(nullable: true),
                    url = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_categorie", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "klant",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    naam = table.Column<string>(nullable: true),
                    adres = table.Column<string>(nullable: true),
                    Discriminator = table.Column<string>(nullable: false),
                    email = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_klant", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "mandje",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    klantID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_mandje", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "product",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    naam = table.Column<string>(nullable: true),
                    prijs = table.Column<double>(nullable: false),
                    beschrijving = table.Column<string>(nullable: true),
                    foto = table.Column<string>(nullable: true),
                    url = table.Column<string>(nullable: true),
                    categorieID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_product", x => x.ID);
                    table.ForeignKey(
                        name: "FK_product_categorie_categorieID",
                        column: x => x.categorieID,
                        principalTable: "categorie",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "bestellingproduct",
                columns: table => new
                {
                    productID = table.Column<int>(nullable: false),
                    bestellingID = table.Column<int>(nullable: false),
                    klantID = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_bestellingproduct", x => new { x.bestellingID, x.productID });
                    table.ForeignKey(
                        name: "FK_bestellingproduct_bestelling_bestellingID",
                        column: x => x.bestellingID,
                        principalTable: "bestelling",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_bestellingproduct_klant_klantID",
                        column: x => x.klantID,
                        principalTable: "klant",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_bestellingproduct_product_productID",
                        column: x => x.productID,
                        principalTable: "product",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "productmandje",
                columns: table => new
                {
                    productID = table.Column<int>(nullable: false),
                    mandjeID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_productmandje", x => new { x.productID, x.mandjeID });
                    table.ForeignKey(
                        name: "FK_productmandje_mandje_mandjeID",
                        column: x => x.mandjeID,
                        principalTable: "mandje",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_productmandje_product_productID",
                        column: x => x.productID,
                        principalTable: "product",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "verlanglijstitem",
                columns: table => new
                {
                    productID = table.Column<int>(nullable: false),
                    geregistreerdeklantID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_verlanglijstitem", x => new { x.productID, x.geregistreerdeklantID });
                    table.ForeignKey(
                        name: "FK_verlanglijstitem_klant_geregistreerdeklantID",
                        column: x => x.geregistreerdeklantID,
                        principalTable: "klant",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_verlanglijstitem_product_productID",
                        column: x => x.productID,
                        principalTable: "product",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_bestellingproduct_klantID",
                table: "bestellingproduct",
                column: "klantID");

            migrationBuilder.CreateIndex(
                name: "IX_bestellingproduct_productID",
                table: "bestellingproduct",
                column: "productID");

            migrationBuilder.CreateIndex(
                name: "IX_product_categorieID",
                table: "product",
                column: "categorieID");

            migrationBuilder.CreateIndex(
                name: "IX_productmandje_mandjeID",
                table: "productmandje",
                column: "mandjeID");

            migrationBuilder.CreateIndex(
                name: "IX_verlanglijstitem_geregistreerdeklantID",
                table: "verlanglijstitem",
                column: "geregistreerdeklantID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "bestellingproduct");

            migrationBuilder.DropTable(
                name: "productmandje");

            migrationBuilder.DropTable(
                name: "verlanglijstitem");

            migrationBuilder.DropTable(
                name: "bestelling");

            migrationBuilder.DropTable(
                name: "mandje");

            migrationBuilder.DropTable(
                name: "klant");

            migrationBuilder.DropTable(
                name: "product");

            migrationBuilder.DropTable(
                name: "categorie");
        }
    }
}
